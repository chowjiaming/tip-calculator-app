import type {JSX} from 'preact/jsx-runtime';
import {useReducer} from 'preact/hooks';
import {Attributions} from './layout/Attributions/Attributions';
import {TipCalculator} from './layout/TipCalculator/TipCalculator';
import {Title} from './layout/Title/Title';
import {
  TipStateContext,
  TipDispatchContext,
} from './utils/tipCalculatorContext';
import {
  initialTipCalculatorState,
  tipCalculatorReducer,
} from './utils/tipCalculatorReducer';
import './app.css';

export function App(): JSX.Element {
  const [tipCalculatorState, dispatch] = useReducer(
    tipCalculatorReducer,
    initialTipCalculatorState
  );

  return (
    <div class="app-container">
      <Title />
      <TipStateContext.Provider value={tipCalculatorState}>
        <TipDispatchContext.Provider value={dispatch}>
          <TipCalculator />
        </TipDispatchContext.Provider>
      </TipStateContext.Provider>
      <Attributions />
    </div>
  );
}
