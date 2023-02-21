import type {JSX} from 'preact/jsx-runtime';
import {useTipContext} from '../../utils/tipCalculatorContext';
import {currencyFormatter} from '../../helpers/formatter';
import {ResetButton} from '../ResetButton/ResetButton';
import './ResultCard.css';

export function ResultCard(): JSX.Element {
  const {state} = useTipContext();

  return (
    <div class="result">
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Tip Amount</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        <h2 class="result__value">
          {currencyFormatter.format(state.tipPerPerson)}
        </h2>
      </div>
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Total</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        <h2 class="result__value">
          {currencyFormatter.format(state.totalBillPerPerson)}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
}
