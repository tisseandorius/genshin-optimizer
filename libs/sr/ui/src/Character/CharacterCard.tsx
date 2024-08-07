import { CardThemed } from '@genshin-optimizer/common/ui'
import type { ICachedSroCharacter } from '@genshin-optimizer/sr/db'
import {
  charData,
  convert,
  selfTag,
  srCalculatorWithEntries,
  withMember,
} from '@genshin-optimizer/sr/formula'
import {
  CardActionArea,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material'

export function CharacterCard({
  character,
  onClick,
}: {
  character: ICachedSroCharacter
  onClick?: () => void
}) {
  const calc = srCalculatorWithEntries(withMember('0', ...charData(character)))

  const member0 = convert(selfTag, { src: '0', et: 'self' })

  return (
    <Stack>
      <CardThemed>
        <CardContent>
          {onClick ? (
            <CardActionArea onClick={onClick}>
              <Typography variant="h4">{character.key}</Typography>
            </CardActionArea>
          ) : (
            <Typography variant="h4">{character.key}</Typography>
          )}
          <Divider />
          <Typography>Eidolon: {character.eidolon}</Typography>
          <Typography>Level: {character.level}</Typography>

          <Typography>ATK: {calc.compute(member0.final.atk).val}</Typography>

          <Typography>
            Break effect: {calc.compute(member0.final.brEff_).val}
          </Typography>
          <Typography>
            CRIT Rate: {calc.compute(member0.final.crit_).val}
          </Typography>
          <Typography>
            CRIT DMG: {calc.compute(member0.final.crit_dmg_).val}
          </Typography>
          <Typography>DEF: {calc.compute(member0.final.def).val}</Typography>
          <Typography>
            Effect Hit Rate: {calc.compute(member0.final.eff_).val}
          </Typography>
          <Typography>
            Effect RES: {calc.compute(member0.final.eff_res_).val}
          </Typography>
          <Typography>
            Energy Regeneration Rate:{' '}
            {calc.compute(member0.final.enerRegen_).val}
          </Typography>
          <Typography>
            Heal Boost: {calc.compute(member0.final.heal_).val}
          </Typography>
          <Typography>HP: {calc.compute(member0.final.hp).val}</Typography>
          <Typography>Speed: {calc.compute(member0.final.spd).val}</Typography>
        </CardContent>
      </CardThemed>
    </Stack>
  )
}
