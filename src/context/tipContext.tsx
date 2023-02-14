import type {JSX} from 'preact/jsx-runtime';
import {createContext} from 'preact';
import {useReducer} from 'preact/hooks';
import type {
  TipCalculatorState,
  TipCalculatorActions,
} from '../utils/tipCalculatorTypes';
import {
  initialTipCalculatorState,
  tipCalculatorReducer,
} from '../utils/tipCalculatorReducer';

type TipCalculatorContextType = {
  tipCalculatorState: TipCalculatorState;
  dispatch: (action: TipCalculatorActions) => void;
};

export const TipContext = createContext<TipCalculatorContextType | null>(null);

type TipContextProviderProps = {
  children: JSX.Element;
};
export const TipProvider = ({children}: TipContextProviderProps) => {
  const [tipCalculatorState, dispatch] = useReducer(
    tipCalculatorReducer,
    initialTipCalculatorState
  );

  return (
    <TipContext.Provider
      value={{
        tipCalculatorState,
        dispatch,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};
