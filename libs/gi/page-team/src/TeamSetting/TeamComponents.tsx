import {
  CardThemed,
  ColorText,
  ImgIcon,
  InfoTooltipInline,
  SqBadge,
} from '@genshin-optimizer/common/ui'
import { artifactAsset } from '@genshin-optimizer/gi/assets'
import type { LoadoutDatum } from '@genshin-optimizer/gi/db'
import type {
  CharacterContextObj,
  TeamCharacterContextObj,
} from '@genshin-optimizer/gi/db-ui'
import {
  CharacterContext,
  TeamCharacterContext,
  useBuildTc,
  useCharacter,
  useDatabase,
  useTeam,
  useTeamChar,
} from '@genshin-optimizer/gi/db-ui'
import type { CharacterSheet } from '@genshin-optimizer/gi/sheets'
import {
  dataSetEffects,
  getArtSheet,
  resonanceSheets,
} from '@genshin-optimizer/gi/sheets'
import type { dataContextObj } from '@genshin-optimizer/gi/ui'
import {
  ArtifactSetName,
  CharacterCardEquipmentRow,
  CharacterCardHeader,
  CharacterCardHeaderContent,
  DataContext,
  DocumentDisplay,
  FieldDisplayList,
  NodeFieldDisplay,
  WeaponFullCardObj,
} from '@genshin-optimizer/gi/ui'
import { input } from '@genshin-optimizer/gi/wr'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardContent,
  CardHeader,
  Divider,
  Skeleton,
  Typography,
} from '@mui/material'
import { Suspense, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export function TeamBuffDisplay() {
  const { data } = useContext(DataContext)
  const nodes = useMemo(() => {
    const teamBuffs = data.getTeamBuff()
    const nodes = [
      ...Object.values(teamBuffs.total ?? {}),
      ...Object.values(teamBuffs.premod ?? {}),
      ...Object.values(teamBuffs.enemy ?? {}),
    ] as const

    return nodes.filter((node) => !node.isEmpty && node.value !== 0)
  }, [data])

  if (!nodes.length) return null
  return (
    <Accordion
      sx={(theme) => ({
        bgcolor: theme.palette.contentLight.main,
        borderRadius: '4px',
        '&:before': {
          display: 'none',
        },
      })}
      disableGutters
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Received Team Buffs</Typography>
          <SqBadge sx={{ ml: 1 }} color={nodes.length ? 'success' : 'info'}>
            {nodes.length}
          </SqBadge>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <Divider />
        <FieldDisplayList bgt="light">
          {nodes.map((n) => (
            <NodeFieldDisplay key={JSON.stringify(n.info)} node={n} />
          ))}
        </FieldDisplayList>
      </AccordionDetails>
    </Accordion>
  )
}
export function ResonanceDisplay({ teamId }: { teamId: string }) {
  const { t } = useTranslation('page_character')
  const { data } = useContext(DataContext)

  const { loadoutData } = useTeam(teamId)!
  const teamCount = loadoutData.reduce((a, t) => a + (t ? 1 : 0), 0)
  return (
    <>
      <CardThemed bgt="light">
        <CardHeader
          title={
            <span>
              {t('tabTeambuff.team_reso')}{' '}
              <strong>
                <ColorText color={teamCount >= 4 ? 'success' : 'warning'}>
                  ({teamCount}/4)
                </ColorText>
              </strong>{' '}
              <InfoTooltipInline
                title={<Typography>{t`tabTeambuff.resonance_tip`}</Typography>}
              />
            </span>
          }
          titleTypographyProps={{ variant: 'subtitle2' }}
        />
      </CardThemed>
      {resonanceSheets.map((res, i) => (
        <CardThemed
          bgt="light"
          key={i}
          sx={{ opacity: res.canShow(data) ? 1 : 0.5 }}
        >
          <CardHeader
            title={
              <span>
                {res.name}{' '}
                <InfoTooltipInline
                  title={<Typography>{res.desc}</Typography>}
                />
              </span>
            }
            action={res.icon}
            titleTypographyProps={{ variant: 'subtitle2' }}
          />
          {res.canShow(data) && <Divider />}
          {res.canShow(data) && (
            <CardContent>
              <DocumentDisplay sections={res.sections} teamBuffOnly hideDesc />
            </CardContent>
          )}
        </CardThemed>
      ))}
    </>
  )
}
export function TeammateDisplay({
  teamCharId,
  dataContextValue,
  teamId,
}: {
  teamCharId: string
  teamId: string
  dataContextValue: dataContextObj
}) {
  const database = useDatabase()
  const { teamData } = dataContextValue
  const team = useTeam(teamId)!
  const teamChar = useTeamChar(teamCharId)!
  const loadoutDatum = database.teams.getLoadoutDatum(teamId, teamCharId)!
  const teamMateKey = teamChar?.key
  const character = useCharacter(teamMateKey)!
  const { key: characterKey } = character

  const dataBundle = teamData[teamMateKey]
  const teammateCharacterContext: TeamCharacterContextObj | undefined = useMemo(
    () =>
      dataBundle && {
        teamId,
        team,
        teamCharId,
        teamChar,
        loadoutDatum,
      },
    [teamId, team, teamCharId, teamChar, dataBundle, loadoutDatum]
  )
  const characterContext: CharacterContextObj | undefined = useMemo(
    () => ({
      character,
    }),
    [character]
  )
  const teamMateDataContext: dataContextObj | undefined = useMemo(
    () =>
      dataBundle && {
        data: dataBundle.target,
        teamData: teamData,
      },
    [dataBundle, teamData]
  )
  if (
    !teamMateKey ||
    !teammateCharacterContext ||
    !teamMateDataContext ||
    !characterContext
  )
    return null
  return (
    <TeamCharacterContext.Provider value={teammateCharacterContext}>
      <DataContext.Provider value={teamMateDataContext}>
        <CharacterContext.Provider value={characterContext}>
          <Suspense
            fallback={
              <Skeleton variant="rectangular" width="100%" height={600} />
            }
          >
            <CardThemed bgt="light">
              <CharacterCardHeader characterKey={characterKey}>
                <CharacterCardHeaderContent characterKey={characterKey} />
              </CharacterCardHeader>
            </CardThemed>

            <EquipmentRow loadoutDatum={loadoutDatum} />
            <CharacterCardWeaponFull loadoutDatum={loadoutDatum} />
            <TeamBuffDisplay />
            <CharArtifactCondDisplay />
            <CharWeaponCondDisplay />
            <CharTalentCondDisplay />
          </Suspense>
        </CharacterContext.Provider>
      </DataContext.Provider>
    </TeamCharacterContext.Provider>
  )
}
function EquipmentRow({
  loadoutDatum,
  loadoutDatum: { buildType },
}: {
  loadoutDatum: LoadoutDatum
}) {
  if (buildType !== 'tc') return <CharacterCardEquipmentRow hideWeapon />
  else return <TcEquipmentRow loadoutDatum={loadoutDatum} />
}
function TcEquipmentRow({
  loadoutDatum: { buildTcId },
}: {
  loadoutDatum: LoadoutDatum
}) {
  const {
    artifact: { sets },
  } = useBuildTc(buildTcId)!
  return (
    <CardThemed bgt="light" sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {/* TODO: Translation */}
        <SqBadge color="info">TC Build</SqBadge>
        {Object.entries(sets).map(([setKey, number]) => (
          <Box
            key={setKey}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <ImgIcon size={2} src={artifactAsset(setKey, 'flower')} />
            <span>
              <ArtifactSetName setKey={setKey} />
            </span>
            <SqBadge>x{number}</SqBadge>
          </Box>
        ))}
      </Box>
    </CardThemed>
  )
}
function CharacterCardWeaponFull({
  loadoutDatum,
}: {
  loadoutDatum: LoadoutDatum
}) {
  const { data } = useContext(DataContext)
  const database = useDatabase()
  const weapon = useMemo(() => {
    const weaponId = data.get(input.weapon.id).value?.toString() ?? 'invalid'

    if (weaponId && weaponId !== 'invalid')
      return database.weapons.get(weaponId)
    else return database.teams.getLoadoutWeapon(loadoutDatum) // TC build
  }, [database, data, loadoutDatum])
  if (!weapon) return null
  return <WeaponFullCardObj weapon={weapon} bgt="light" />
}
function CharArtifactCondDisplay() {
  const { data } = useContext(DataContext)
  const sections = useMemo(
    () =>
      Object.entries(dataSetEffects(data)).flatMap(([setKey, setNums]) =>
        setNums.flatMap((sn) => getArtSheet(setKey).setEffectDocument(sn) ?? [])
      ),
    [data]
  )
  if (!sections) return null
  return <DocumentDisplay bgt="light" sections={sections} teamBuffOnly={true} />
}
function CharWeaponCondDisplay() {
  const {
    character: { key: charKey },
  } = useContext(CharacterContext)
  const { teamData } = useContext(DataContext)
  const weaponSheet = teamData[charKey]!.weaponSheet
  if (!weaponSheet.document) return null
  return (
    <DocumentDisplay
      bgt="light"
      sections={weaponSheet.document}
      teamBuffOnly={true}
    />
  )
}
function CharTalentCondDisplay() {
  const {
    character: { key: charKey },
  } = useContext(CharacterContext)
  const { teamData } = useContext(DataContext)
  const characterSheet = teamData[charKey]!.characterSheet as CharacterSheet
  const sections = Object.values(characterSheet.talent).flatMap(
    (sts) => sts.sections
  )
  if (!sections) return null
  return <DocumentDisplay bgt="light" sections={sections} teamBuffOnly={true} />
}
