import type {
  AdditiveReactionKey,
  AmpReactionKey,
  InfusionAuraElementKey,
  MultiOptHitModeKey,
} from '@genshin-optimizer/gi/consts'

export interface CustomTarget {
  weight: number
  path: string[]
  hitMode: MultiOptHitModeKey
  reaction?: AmpReactionKey | AdditiveReactionKey
  infusionAura?: InfusionAuraElementKey
  // TODO: Partial<Record<InputPremodKey, number>>
  bonusStats: Record<string, number>
}

export const ExpressionOperations = [
  'addition',
  'subtraction',
  'multiplication',
  'division',
  'priority',
  'minimum',
  'maximum',
  'average',
  // 'ceil',
  // 'floor',
  // 'clamp',
] as const
export type ExpressionOperation = (typeof ExpressionOperations)[number]
export const isExpressionOperation = (op: unknown): op is ExpressionOperation =>
  ExpressionOperations.includes(op as ExpressionOperation)

export const EnclosingOperations = [
  'priority',
  'minimum',
  'maximum',
  'average',
] as const
export type EnclosingOperation = (typeof EnclosingOperations)[number]
export const isEnclosing = (op: unknown): op is EnclosingOperation =>
  EnclosingOperations.includes(op as EnclosingOperation)

export const OperationSpecs: Record<Exclude<ExpressionOperation, EnclosingOperation>, {
  symbol: string
  precedence: number
  arity?: { min: 2; max: typeof Infinity }
  enclosing?: false
}> & Record<EnclosingOperation, {
  symbol: string
  precedence: number
  arity: { min: number; max: number }
  enclosing: { left: string; right: string }
}> = {
  addition: { symbol: '+', precedence: 1 },
  subtraction: { symbol: '-', precedence: 1 },
  multiplication: { symbol: '*', precedence: 2 },
  division: { symbol: '/', precedence: 2 },
  priority: { symbol: '', precedence: 3, arity: { min: 1, max: 1 }, enclosing: { left: '(', right: ')' } },
  minimum: { symbol: 'min', precedence: 3, arity: { min: 1, max: Infinity }, enclosing: { left: '(', right: ')' } },
  maximum: { symbol: 'max', precedence: 3, arity: { min: 1, max: Infinity }, enclosing: { left: '(', right: ')' } },
  average: { symbol: 'avg', precedence: 3, arity: { min: 1, max: Infinity }, enclosing: { left: '(', right: ')' } },
} as const

export const ExpressionUnitTypes = [
  'constant',
  'target',
  'operation',
  'function',
  'enclosing',
  'null',
] as const
export type ExpressionUnitType = ExpressionUnit['type']
(_: readonly ExpressionUnitType[] = ExpressionUnitTypes) => {}
export const isExpressionUnitType = (type: unknown): type is ExpressionUnitType => {
  return ExpressionUnitTypes.includes(type as ExpressionUnitType)
}

export type ExpressionUnit =
  | ConstantUnit
  | TargetUnit
  | OperationUnit
  | FunctionUnit
  | EnclosingUnit
  | NullUnit

export interface ConstantUnit {
  type: 'constant'
  value: number
}

export interface TargetUnit {
  type: 'target'
  target: CustomTarget
}

export interface OperationUnit {
  type: 'operation'
  operation: Exclude<ExpressionOperation, EnclosingOperation>
}

export interface FunctionUnit {
  type: 'function'
  name: string
}

export type EnclosingUnit = EnclosingHeadUnit | EnclosingPartUnit

export interface EnclosingHeadUnit {
  type: 'enclosing'
  part: 'head'
  operation: EnclosingOperation
}

export interface EnclosingPartUnit {
  type: 'enclosing'
  part: 'comma' | 'tail'
}

export interface NullUnit {
  type: 'null'
  kind: 'operand' | 'operation'
}

export interface CustomFunction {
  name: string
  args: string[]
  expression: ExpressionUnit[]
}

export interface CustomMultiTarget {
  name: string
  description?: string
  targets: CustomTarget[]
  functions?: CustomFunction[]
  expression?: ExpressionUnit[]
}
