import type {
  CharacterKey,
  ElementKey,
  RarityKey,
  WeaponTypeKey,
} from '@genshin-optimizer/gi/consts'
import type { DocumentSection } from '../sheet'

export interface TalentSheetElement {
  name: ReactNode //talentName
  img: string
  sections: DocumentSection[]
}
export type TalentSheetElementKey =
  | 'auto'
  | 'skill'
  | 'burst'
  | 'sprint'
  | 'passive'
  | 'passive1'
  | 'passive2'
  | 'passive3'
  | 'constellation1'
  | 'constellation2'
  | 'constellation3'
  | 'constellation4'
  | 'constellation5'
  | 'constellation6'
export type TalentSheet = Partial<
  Record<TalentSheetElementKey, TalentSheetElement>
>

export type ICharacterSheet = {
  /**
   * @deprecated
   */
  key: CharacterKey
  /**
   * @deprecated <CharacterName/>
   */
  name: ReactNode
  /**
   * @deprecated getCharData().rarity
   */
  rarity: RarityKey
  /**
   * @deprecated getCharData().weaponType
   */
  weaponTypeKey: WeaponTypeKey
  /**
   * @deprecated
   */
  gender: string
  /**
   * @deprecated <CharacterConstellationName/>
   */
  constellationName: ReactNode
  /**
   * @deprecated <CharacterTitle/>
   */
  title: ReactNode
  /**
   * @deprecated getCharEle()
   */
  elementKey: ElementKey

  talent: TalentSheet
}
