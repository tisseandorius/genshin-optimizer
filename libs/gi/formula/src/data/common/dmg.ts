import {
  custom,
  lookup,
  prod,
  subscript,
  sum,
  sumfrac,
} from '@genshin-optimizer/pando/engine'
import type { TagMapNodeEntries } from '../util'
import { enemy, enemyDebuff, percent, priorityTable, self } from '../util'

export const infusionPrio = {
  nonOverridable: { hydro: 5, pyro: 6 },
  team: { hydro: 3, pyro: 4 },
  overridable: { physical: 0, hydro: 1, pyro: 2 },
}
const infusionTable = priorityTable(infusionPrio),
  preRes = enemy.common.preRes

const data: TagMapNodeEntries = [
  enemyDebuff.common.postRes.add(custom('res', preRes)),
  enemyDebuff.common.inDmg.add(
    prod(
      sumfrac(
        sum(self.char.lvl, 100),
        prod(
          sum(enemy.common.lvl, 100),
          sum(percent(1), prod(-1, enemy.common.defRed_)), // TODO: Cap
          sum(percent(1), prod(-1, enemy.common.defIgn)) // TODO: Cap
        )
      ),
      enemy.common.postRes
    )
  ),
  self.dmg.out.add(
    prod(
      self.reaction.ampMulti,
      sum(self.formula.base, self.reaction.cataAddi),
      sum(percent(1), self.final.dmg_)
    )
  ),
  self.dmg.critMulti.add(
    lookup(self.common.critMode, {
      crit: sum(1, self.common.cappedCritRate_),
      nonCrit: 1,
      avg: sum(1, prod(self.common.cappedCritRate_, self.final.critDMG_)),
    })
  ),

  self.reaction.infusion.add(
    subscript(self.reaction.infusionIndex.max, infusionTable)
  ),
  self.reaction.infusionIndex.add(0),
]
export default data
