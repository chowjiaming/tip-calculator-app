import type {JSX} from 'preact/jsx-runtime';
import {useReducer} from 'preact/hooks';
import {TipCalculator} from '@/layout/TipCalculator';
import {Layout} from '@/layout';
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
 * Renders the layout component with the tip calculator state and dispatch function in context.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export function App(): JSX.Element {
  // Set up the tip calculator state and dispatch function using the useReducer hook
  const [tipCalculatorState, dispatch] = useReducer(
    tipCalculatorReducer,
    initialTipCalculatorState
  );

  // Render layout component with the tip calculator state and dispatch function in context
  return (
    <Layout>
      <TipStateContext.Provider value={tipCalculatorState}>
        <TipDispatchContext.Provider value={dispatch}>
          <TipCalculator />
        </TipDispatchContext.Provider>
      </TipStateContext.Provider>
    </Layout>
  );
}
