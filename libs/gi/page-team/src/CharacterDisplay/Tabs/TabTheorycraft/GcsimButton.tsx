import { useBoolState } from '@genshin-optimizer/common/react-util'
import { CardThemed, CodeBlock, ImgIcon } from '@genshin-optimizer/common/ui'
import { toDecimal } from '@genshin-optimizer/common/util'
import type { MainStatKey, SubstatKey } from '@genshin-optimizer/gi/consts'
import { CharacterContext } from '@genshin-optimizer/gi/db-ui'
import { ascensionMaxLevel, getMainStatValue } from '@genshin-optimizer/gi/util'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import {
  Button,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from '@mui/material'
import { useContext } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { BuildTcContext } from '../../../BuildTcContext'
import gcsimIcon from './gcsim.png'

// From https://github.com/genshinsim/gcsim/blob/68874fb693c4e959b336d106f201c29d100fc2c8/pkg/core/attributes/stats.go#L72
const GOODtoSRL: Record<MainStatKey | SubstatKey, string> = {
  def_: 'def%',
  def: 'def',
  hp: 'hp',
  hp_: 'hp%',
  atk: 'atk',
  atk_: 'atk%',
  enerRech_: 'er',
  eleMas: 'em',
  critRate_: 'cr',
  critDMG_: 'cd',
  heal_: 'heal',
  pyro_dmg_: 'pyro%',
  hydro_dmg_: 'hydro%',
  cryo_dmg_: 'cryo%',
  electro_dmg_: 'electro%',
  anemo_dmg_: 'anemo%',
  geo_dmg_: 'geo%',
  dendro_dmg_: 'dendro%',
  physical_dmg_: 'phys%',
  // "atkspd%",
  // "dmg%",
}
export default function GcsimButton({ disabled }: { disabled: boolean }) {
  const { t } = useTranslation(['page_character', 'settings'])
  const [open, onOpen, onClose] = useBoolState()

  const {
    character: {
      key: characterKey,
      level,
      ascension,
      constellation,
      talent: { auto, skill, burst },
    },
  } = useContext(CharacterContext)
  const {
    buildTc: {
      weapon: {
        key: weaponKey,
        level: wLevel,
        ascension: wAscension,
        refinement: wRefinement,
      },
      artifact: {
        slots,
        substats: { stats: substats },
        sets,
      },
    },
  } = useContext(BuildTcContext)

  const charKeyLow = characterKey.toLowerCase()

  const setText = Object.entries(sets)
    .map(
      ([key, num]) =>
        `${charKeyLow} add set="${key.toLowerCase()}" count=${num};`
    )
    .join('\n')

  const mainStatsText = Object.entries(slots)
    .map(
      ([_, { level, statKey, rarity }]) =>
        `${GOODtoSRL[statKey]}=${getMainStatValue(statKey, rarity, level)}`
    )
    .join(' ')
  const substatsText = Object.entries(substats)
    .map(
      ([key, value]) =>
        `${GOODtoSRL[key]}=${toDecimal(value, key).toFixed(
          key.endsWith('_') ? 4 : 2
        )}`
    )
    .join(' ')

  const text = `# Generated by Genshin Optimizer

# Character
${charKeyLow} char lvl=${level}/${
    ascensionMaxLevel[ascension]
  } cons=${constellation} talent=${auto},${skill},${burst};

# Weapon
${charKeyLow} add weapon="${weaponKey.toLowerCase()}" refine=${wRefinement} lvl=${wLevel}/${
    ascensionMaxLevel[wAscension]
  };

# Artifact Set
${setText ? setText : '# No Artifact Sets'}

# Main stats
${charKeyLow} add stats ${mainStatsText};

# Sub stats
${charKeyLow} add stats ${substatsText};`
  const copyToClipboard = () =>
    navigator.clipboard
      .writeText(text)
      .then(() => alert(t('tabTheorycraft.gcsimDialog.copied')))
      .catch(console.error)

  return (
    <>
      <Button
        onClick={onOpen}
        startIcon={<ImgIcon src={gcsimIcon} />}
        disabled={disabled}
      >
        {t('tabTheorycraft.gcsimDialog.title')}
      </Button>
      <Dialog open={open} onClose={onClose} maxWidth="lg">
        <DialogTitle>{t('tabTheorycraft.gcsimDialog.title')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Trans t={t} i18nKey="tabTheorycraft.gcsimDialog.content">
              Import this build into{' '}
              <Link href="https://gcsim.app/" target="_blank">
                gcsim
              </Link>{' '}
              by copying the code below.
            </Trans>
          </DialogContentText>
          <CardThemed>
            <CardContent>
              <CodeBlock text={text} />
            </CardContent>
          </CardThemed>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            color="info"
            onClick={copyToClipboard}
            startIcon={<ContentPasteIcon />}
          >
            <Trans t={t} i18nKey="settings:DatabaseCard.button.copy" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
