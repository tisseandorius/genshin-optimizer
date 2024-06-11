import { clamp, range } from '@genshin-optimizer/common/util'
import type {
  AddressItemTypesMap,
  CustomFunction,
  CustomFunctionArgument,
  CustomMultiTarget,
  ExpressionUnit,
  ItemAddress,
} from '@genshin-optimizer/gi/db'
import { itemAddressValue, itemPartFinder } from '@genshin-optimizer/gi/db'
import { Box } from '@mui/material'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import AddItemsPanel from './AddItemsPanel'
import ExpressionDisplay from './ExpressionDisplay'
import ItemConfigPanel from './ItemConfigPanel'

function isEqual(a: any, b: any) {
  return JSON.stringify(a) === JSON.stringify(b)
}

function assertNever(_: never) {}

/** Selected item address */
function useSIA(address?: ItemAddress) {
  const [sia, _setSIA] = useState<ItemAddress>(address)
  const oldSIA = useMemo(() => (sia ? { ...sia } : undefined), [sia])

  const setSIA: Dispatch<SetStateAction<ItemAddress>> = useCallback(
    (arg: ItemAddress | ((address: ItemAddress) => ItemAddress)) => {
      if (arg instanceof Function) arg = arg(oldSIA ? { ...oldSIA } : undefined)
      if (!arg) return _setSIA(undefined)
      if (oldSIA && isEqual(oldSIA, arg)) return
      _setSIA({ ...arg })
    },
    [oldSIA]
  )

  return [sia, setSIA] as const
}

export default function TargetExpressionEditor({
  customMultiTarget: CMT,
  setCustomMultiTarget,
}: {
  customMultiTarget: CustomMultiTarget
  setCustomMultiTarget: Dispatch<SetStateAction<CustomMultiTarget>>
}) {
  const functions = useMemo(() => [...(CMT.functions ?? [])], [CMT])
  const expression = useMemo(() => [...(CMT.expression ?? [])], [CMT])

  const setCMT = useCallback(
    (
      arg:
        | Partial<CustomMultiTarget>
        | ((CMT: CustomMultiTarget) => CustomMultiTarget)
    ) => {
      setCustomMultiTarget((prev) => {
        if (arg instanceof Function) arg = arg(prev)
        return { ...prev, ...arg }
      })
    },
    [setCustomMultiTarget]
  )

  const [sia, setSIA] = useSIA()
  const [onFocused, setOnFocus] = useState(false)
  const focusToSIA = useCallback(() => setOnFocus((prev) => !prev), [])

  /** Selected item related parts addresses */
  const sirpa = useMemo(
    () => itemPartFinder(expression, functions, sia),
    [sia, expression, functions]
  )

  useEffect(() => {
    if (!itemAddressValue(expression, functions, sia)) setSIA(undefined)
  }, [expression, functions, sia, setSIA])

  const setFunction = useCallback(
    (
      layer: number,
      arg: Partial<CustomFunction> | ((func: CustomFunction) => CustomFunction)
    ) => {
      setCMT((prev) => {
        const funcs = prev.functions ?? []
        const func = funcs[layer]
        if (!func) return prev
        if (arg instanceof Function) arg = arg(func)
        funcs.splice(layer, 1, { ...func, ...arg })
        return prev
      })
    },
    [setCMT]
  )

  const setExpressionItem = useCallback(
    <T extends AddressItemTypesMap>(
      address: T[0] | undefined,
      arg: Partial<T[1]> | ((item: T[1]) => T[1])
    ) => {
      if (!address) return
      const item = itemAddressValue<T>(expression, functions, address)
      if (!item) return
      if (arg instanceof Function) arg = arg(item)
      const newItem = { ...item, ...arg }
      if (address.type === 'function') {
        setFunction(address.layer, newItem)
      } else if (address.type === 'argument') {
        setFunction(address.layer, (func) => {
          func.args.splice(address.index, 1, newItem as CustomFunctionArgument)
          return func
        })
      } else if (address.type === 'unit') {
        if (address.layer < functions.length) {
          setFunction(address.layer, (func) => {
            func.expression.splice(address.index, 1, newItem as ExpressionUnit)
            return func
          })
        } else {
          expression.splice(address.index, 1, newItem as ExpressionUnit)
          setCMT({ expression })
        }
      } else {
        return assertNever(address)
      }
    },
    [expression, functions, setCMT, setFunction]
  )

  const addExpressionItem = useCallback(
    <T extends AddressItemTypesMap>(address: T[0], item: T[1]) => {
      const layer = clamp(address.layer, 0, functions.length)
      if (address.type === 'function') {
        functions.splice(layer, 0, item as CustomFunction)
        setCMT({ functions })
      } else if (address.type === 'argument') {
        setFunction(layer, (func) => {
          const index = clamp(address.index, 0, func.args.length)
          func.args.splice(index, 0, item as CustomFunctionArgument)
          return func
        })
      } else if (address.type === 'unit') {
        const index = clamp(address.index, 0, expression.length)
        if (layer < functions.length) {
          setFunction(layer, (func) => {
            func.expression.splice(index, 0, item as ExpressionUnit)
            return func
          })
        } else {
          expression.splice(index, 0, item as ExpressionUnit)
          setCMT({ expression })
        }
      } else {
        return assertNever(address)
      }
    },
    [expression, functions, setCMT, setFunction]
  )

  const removeExpressionItem = useCallback(
    (address: ItemAddress) => {
      if (!address) return
      if (address.type === 'function') {
        functions.splice(address.layer, 1)
        setCMT({ functions })
      } else if (address.type === 'argument') {
        setFunction(address.layer, (func) => {
          func.args.splice(address.index, 1)
          return func
        })
      } else if (address.type === 'unit') {
        if (address.layer < functions.length) {
          setFunction(address.layer, (func) => {
            func.expression.splice(address.index, 1)
            return func
          })
        } else {
          expression.splice(address.index, 1)
          setCMT({ expression })
        }
      } else {
        return assertNever(address)
      }
    },
    [expression, functions, setCMT, setFunction]
  )

  // TODO: Drag and drop
  const moveExpressionItem = useCallback(
    <T extends ItemAddress>(from: T, to: T) => {
      if (!from || !to) return
      if (isEqual(from, to)) return
      const item = itemAddressValue(expression, functions, from)
      if (!item) return
      removeExpressionItem(from)
      addExpressionItem(to, item)
    },
    [addExpressionItem, expression, functions, removeExpressionItem]
  )

  /** Set undefined if the same item is clicked again */
  const re_setSIA = useCallback(
    (address: ItemAddress | ((address: ItemAddress) => ItemAddress)) => {
      setSIA((prev) => {
        if (address instanceof Function) address = address(prev)
        if (!address) return undefined
        if (prev && isEqual(prev, address)) return undefined
        return address
      })
    },
    [setSIA]
  )

  const expressionDisplays = useMemo(
    () =>
      range(0, functions.length).map((layer) => (
        <ExpressionDisplay
          key={layer}
          expression={expression}
          functions={functions}
          layer={layer}
          sia={sia}
          setSIA={re_setSIA}
          sirpa={sirpa}
          onFocused={onFocused}
        />
      )),
    [expression, functions, onFocused, re_setSIA, sia, sirpa]
  )

  const itemConfigPanel = useMemo(() => {
    if (!sia) return null
    const item = itemAddressValue(expression, functions, sia)
    if (!item) return null
    return (
      <ItemConfigPanel
        item={item}
        setItem={setExpressionItem}
        removeItem={removeExpressionItem}
        moveItem={moveExpressionItem}
        addItem={addExpressionItem}
        sia={sia}
        sirpa={sirpa}
        functions={functions}
        expression={expression}
        setSIA={setSIA}
        focusToSIA={focusToSIA}
      />
    )
  }, [
    addExpressionItem,
    expression,
    focusToSIA,
    functions,
    moveExpressionItem,
    removeExpressionItem,
    setExpressionItem,
    setSIA,
    sia,
    sirpa,
  ])

  return (
    <>
      <AddItemsPanel
        expression={expression}
        functions={functions}
        sia={sia}
        setSIA={setSIA}
        addItem={addExpressionItem}
      />
      <Box display="flex" flexDirection="column" gap={1} pb={'60vh'}>
        {expressionDisplays}
      </Box>
      {itemConfigPanel}
    </>
  )
}
