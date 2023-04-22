import {createContext} from 'preact';
import {useContext} from 'preact/hooks';
import type {
  TipCalculatorState,
  TipCalculatorActions,
} from './tipCalculatorTypes';

// Create a context for storing the tip calculator state
export const TipStateContext = createContext<TipCalculatorState | null>(null);

// Create a context for storing the tip calculator dispatch function
export const TipDispatchContext = createContext<
  ((action: TipCalculatorActions) => void) | null
>(null);

/**
 * Custom hook for accessing the tip calculator state and dispatch function.
 * Ensures that the hook is used within a context provider.
 *
 * @returns {Object} An object containing the state and dispatch from the tip calculator context.
 * @throws {Error} If the hook is used outside a context provider.
 */
export const useTipContext = (): {
  state: TipCalculatorState;
  dispatch: (action: TipCalculatorActions) => void;
} => {
  // Retrieve the tip calculator state and dispatch function from their respective contexts
  const state = useContext(TipStateContext);
  const dispatch = useContext(TipDispatchContext);

  // Check if the state and dispatch function are null, indicating the hook is used outside a context provider
  if (state === null || dispatch === null) {
    throw new Error('useTipContext must be used within a TipProvider');
  }

  // Return the state and dispatch function as an object
  return {state, dispatch};
};
