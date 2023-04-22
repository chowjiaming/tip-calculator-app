import type {JSX} from 'preact/jsx-runtime';
import {useReducer} from 'preact/hooks';
import {Attributions} from '@/layout/Attributions';
import {TipCalculator} from '@/layout/TipCalculator';
import {Title} from '@/layout/Title';
import {
  TipStateContext,
  TipDispatchContext,
} from '@/utils/tipCalculatorContext';
import {
  initialTipCalculatorState,
  tipCalculatorReducer,
} from '@/utils/tipCalculatorReducer';
import '@/app.css';

/**
 * The root component of the tip calculator app.
 * Renders the Title, TipCalculator, and Attributions components wrapped in context providers.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export function App(): JSX.Element {
  // Set up the tip calculator state and dispatch function using the useReducer hook
  const [tipCalculatorState, dispatch] = useReducer(
    tipCalculatorReducer,
    initialTipCalculatorState
  );

  // Render the Title, TipCalculator, and Attributions components wrapped in context providers
  return (
    <div class="app">
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
