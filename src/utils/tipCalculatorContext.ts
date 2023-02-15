import {createContext} from 'preact';
import type {
  TipCalculatorState,
  TipCalculatorActions,
} from './tipCalculatorTypes';

export const TipStateContext = createContext<TipCalculatorState | null>(null);
export const TipDispatchContext = createContext<
  ((action: TipCalculatorActions) => void) | null
>(null);
