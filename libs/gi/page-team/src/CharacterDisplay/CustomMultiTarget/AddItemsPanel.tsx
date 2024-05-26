import { useBoolState } from '@genshin-optimizer/common/react-util'
import {
  CustomNumberInput,
  CustomNumberInputButtonGroupWrapper,
} from '@genshin-optimizer/common/ui'
import type {
  ArgumentAddress,
  CustomFunction,
  CustomFunctionArgument,
  ExpressionUnit,
  FunctionAddress,
  ItemAddress,
  UnitAddress,
} from '@genshin-optimizer/gi/db'
import {
  OperationSpecs,
  initCustomFunction,
  initCustomFunctionArgument,
  initCustomTarget,
  initExpressionUnit,
} from '@genshin-optimizer/gi/db'
import { Box, Button, ButtonGroup, Grid } from '@mui/material'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TargetSelectorModal } from '../Tabs/TabOptimize/Components/TargetSelectorModal'

export default function AddItemsPanel({
  addItem,
  sia,
  setSIA,
  functions,
  expression,
}: {
  addItem: <
    T extends
      | [FunctionAddress, CustomFunction]
      | [ArgumentAddress, CustomFunctionArgument]
      | [UnitAddress, ExpressionUnit]
  >(
    address: T[0],
    item: T[1]
  ) => void
  sia: ItemAddress
  setSIA: Dispatch<SetStateAction<ItemAddress>>
  functions: CustomFunction[]
  expression: ExpressionUnit[]
}) {
  const { t } = useTranslation('page_character')
  const [show, onShow, onClose] = useBoolState(false)
  const [newNumber, setNewNumber] = useState<number | undefined>()

  const addFunction = useCallback(
    (func: Partial<CustomFunction>) => {
      let _sia = sia
      if (!_sia) {
        _sia = { type: 'function', layer: functions.length }
      } else {
        _sia.layer++
      }
      addItem(_sia, initCustomFunction(func, functions))
      setSIA(_sia)
    },
    [addItem, functions, setSIA, sia]
  )

  const addArgument = useCallback(
    (arg: Partial<CustomFunctionArgument>) => {
      let _sia = sia
      if (!_sia || _sia.type !== 'argument') {
        if (functions.length === 0) return
        const layer =
          _sia && _sia.layer < functions.length
            ? _sia.layer
            : functions.length - 1
        const func = functions[layer]
        _sia = { type: 'argument', layer, index: func.args.length }
      } else {
        _sia.index++
      }
      addItem(_sia, initCustomFunctionArgument(arg, functions[_sia.layer]))
      setSIA(_sia)
    },
    [addItem, functions, setSIA, sia]
  )

  const addUnit = useCallback(
    (unit: Partial<ExpressionUnit>) => {
      let _sia = sia
      if (!_sia || _sia.type !== 'unit') {
        const layer = _sia?.layer ?? functions.length
        const e =
          layer < functions.length ? functions[layer].expression : expression
        _sia = { type: 'unit', layer, index: e.length }
      } else {
        _sia.index++
      }
      if (unit.type === 'function' && !unit.name) {
        if (!unit.name && sia?.type === 'argument') {
          unit.name = functions[sia.layer]?.args[sia.index]?.name
        }
        if (!unit.name && _sia.layer < functions.length) {
          unit.name = functions[_sia.layer]?.args[0]?.name
        }
        if (!unit.name) {
          unit.name = functions[_sia.layer - 1]?.name
        }
      }
      addItem(_sia, initExpressionUnit(unit))
      setSIA(_sia)
    },
    [addItem, expression, functions, setSIA, sia]
  )

  const addConstant = useCallback(() => {
    addUnit({ type: 'constant', value: newNumber ?? 1 })
    setNewNumber(undefined)
  }, [addUnit, newNumber])

  const OperationButtons = useMemo(() => {
    return (['addition', 'subtraction', 'multiplication'] as const).map(
      (operation) => {
        return (
          <Grid item xs={1.5} key={operation}>
            <Button
              key={operation}
              onClick={() => addUnit({ type: 'operation', operation })}
            >
              {OperationSpecs[operation].symbol}
            </Button>
          </Grid>
        )
      }
    )
  }, [addUnit])

  const EnclosingButtons = useMemo(() => {
    const result = []
    for (const enclosing of ['minimum', 'maximum', 'average'] as const) {
      result.push(
        <Grid item xs={1.5} key={enclosing}>
          <Button
            key={enclosing}
            onClick={() =>
              addUnit({
                type: 'enclosing',
                operation: enclosing,
                part: 'head',
              })
            }
          >
            {OperationSpecs[enclosing].symbol}
          </Button>
        </Grid>
      )
    }
    result.push(
      <Grid item xs={0.5} key={'priority'}>
        <Button
          key={'priority'}
          onClick={() =>
            addUnit({
              type: 'enclosing',
              operation: 'priority',
              part: 'head',
            })
          }
        >
          {'('}
        </Button>
      </Grid>
    )
    for (const part of ['comma', 'tail'] as const) {
      result.push(
        <Grid item xs={0.5} key={part}>
          <Button
            key={part}
            onClick={() => addUnit({ type: 'enclosing', part })}
          >
            {part === 'comma' ? ',' : ')'}
          </Button>
        </Grid>
      )
    }
    return result
  }, [addUnit])

  const addFunctionUnitButton = useMemo(() => {
    return (
      <Button
        key={'addFunctionUnit'}
        onClick={() => addUnit({ type: 'function' })}
      >
        {'ƒ'}
      </Button>
    )
  }, [addUnit])

  return (
    <Box display="flex" gap={1}>
      <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" gap={1}>
        <Box display="flex" gap={1}>
          <Button
            key={'addNewFunction'}
            sx={{ flexGrow: 1 }}
            onClick={() => addFunction({})}
          >{t`multiTarget.addNewFunction`}</Button>
          <Button
            key={'addNewArgument'}
            sx={{ flexGrow: 1 }}
            onClick={() => addArgument({})}
          >{t`multiTarget.addNewArgument`}</Button>
          <Button
            key={'addNewTarget'}
            sx={{ flexGrow: 1 }}
            onClick={onShow}
          >{t`multiTarget.addNewTarget`}</Button>
          {addFunctionUnitButton}
          <ButtonGroup>
            <Button key={'addConstant'} onClick={addConstant}>
              {t`multiTarget.add`}
            </Button>
            <CustomNumberInputButtonGroupWrapper>
              <CustomNumberInput
                float
                value={newNumber}
                onChange={setNewNumber}
                inputProps={{ sx: { pl: 1 } }}
              />
            </CustomNumberInputButtonGroupWrapper>
          </ButtonGroup>
        </Box>
        <ButtonGroup fullWidth>
          {OperationButtons}
          {EnclosingButtons}
        </ButtonGroup>
      </Box>
      <TargetSelectorModal
        showEmptyTargets
        show={show}
        onClose={onClose}
        setTarget={(target, multi) => {
          onClose()
          addUnit({ type: 'target', target: initCustomTarget(target, multi) })
        }}
        excludeSections={['bounsStats', 'character', 'custom']}
      />
    </Box>
  )
}
