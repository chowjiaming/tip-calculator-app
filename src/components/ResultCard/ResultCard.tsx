import type {JSX} from 'preact/jsx-runtime';
import {useTipContext} from '@/utils/tipCalculatorContext';
import {currencyFormatter} from '@/helpers/formatter';
import {ResetButton} from '@/components/ResetButton/ResetButton';
import '@/components/ResultCard/ResultCard.css';

/**
 * Component that displays the calculated tip and total bill per person,
 * as well as a button to reset the inputs.
 *
 * @returns {JSX.Element} JSX element containing the result card
 */
export function ResultCard(): JSX.Element {
  // Retrieve the tip calculator state from context
  const {state} = useTipContext();

  return (
    <div class="result">
      {/* Container for displaying the tip amount per person */}
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Tip Amount</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        {/* Display the tip amount per person formatted as currency */}
        <h2 class="result__value">
          {currencyFormatter.format(state.tipPerPerson)}
        </h2>
      </div>
      {/* Container for displaying the total bill amount per person */}
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Total</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        {/* Display the total bill amount per person formatted as currency */}
        <h2 class="result__value">
          {currencyFormatter.format(state.totalBillPerPerson)}
        </h2>
      </div>
      {/* Button to reset the tip calculator inputs */}
      <ResetButton />
    </div>
  );
}
