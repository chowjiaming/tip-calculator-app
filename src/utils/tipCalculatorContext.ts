import {createContext} from 'preact';
import {useContext} from 'preact/hooks';
import type {
  TipCalculatorState,
  TipCalculatorActions,
} from './tipCalculatorTypes';

export const TipStateContext = createContext<TipCalculatorState | null>(null);
export const TipDispatchContext = createContext<
  ((action: TipCalculatorActions) => void) | null
>(null);

export const useTipContext = () => {
  const state = useContext(TipStateContext);
  const dispatch = useContext(TipDispatchContext);

  if (state === null || dispatch === null) {
    throw new Error('useTipContext must be used within a TipProvider');
  }

  return {state, dispatch};
};
