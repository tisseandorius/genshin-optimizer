import { iconInlineProps } from '@genshin-optimizer/common/svgicons'
import {
  BootstrapTooltip,
  SqBadge,
  StarsDisplay,
} from '@genshin-optimizer/common/ui'
import { clamp } from '@genshin-optimizer/common/util'
import type { ICachedArtifact } from '@genshin-optimizer/gi/db'
import { KeyMap } from '@genshin-optimizer/gi/keymap'
import { getArtSheet } from '@genshin-optimizer/gi/sheets'
import { SlotIcon, StatIcon } from '@genshin-optimizer/gi/svgicons'
import type { RollColorKey } from '@genshin-optimizer/gi/ui'
import { IconStatDisplay, artifactLevelVariant } from '@genshin-optimizer/gi/ui'
import { getMainStatDisplayStr } from '@genshin-optimizer/gi/util'
import { Box, Skeleton, Typography } from '@mui/material'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import LocationName from '../Character/LocationName'

export default function ArtifactTooltip({
  art,
  children,
}: {
  art: ICachedArtifact
  children: JSX.Element
}) {
  const fallback = (
    <Box>
      <Skeleton variant="rectangular" width={100} height={100} />
    </Box>
  )
  const title = (
    <Suspense fallback={fallback}>
      <ArtifactData art={art} />
    </Suspense>
  )

  return (
    <BootstrapTooltip placement="top" title={title} disableInteractive>
      {children}
    </BootstrapTooltip>
  )
}
function ArtifactData({ art }: { art: ICachedArtifact }) {
  const { t: tk } = useTranslation('statKey_gen')
  const sheet = getArtSheet(art.setKey)
  const { slotKey, level, rarity, mainStatKey, substats } = art
  const slotName = sheet.getSlotName(slotKey)
  const mainVariant = KeyMap.getVariant(mainStatKey)
  return (
    <Box p={1}>
      <Typography variant="h6">
        <SlotIcon slotKey={slotKey} iconProps={iconInlineProps} /> {slotName}
      </Typography>
      <Typography variant="subtitle1" color={`${mainVariant}.main`}>
        <StatIcon statKey={mainStatKey} iconProps={iconInlineProps} />{' '}
        {tk(mainStatKey)} {getMainStatDisplayStr(mainStatKey, rarity, level)}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <StarsDisplay stars={rarity} />
        <SqBadge color={artifactLevelVariant(level)}>+{level}</SqBadge>{' '}
      </Typography>
      <Box py={1}>
        {substats.map(
          ({ value, key, rolls }) =>
            !!(value && key) && (
              <IconStatDisplay
                key={key}
                statKey={key}
                value={value}
                color={`roll${clamp(rolls.length, 1, 6)}` as RollColorKey} //TODO: stat.rolls.length instead of 1
                prefix="+"
              />
            )
        )}
      </Box>

      <Typography color="success.main">{sheet.name}</Typography>
      <LocationName color="secondary.main" location={art.location} />
    </Box>
  )
}
