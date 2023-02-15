import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {TipStateContext} from '../../utils/tipCalculatorContext';
import {currencyFormatter} from '../../helpers/formatter';
import {ResetButton} from '../ResetButton/ResetButton';
import './ResultCard.css';

export function ResultCard(): JSX.Element {
  const tipCalculatorState = useContext(TipStateContext);
  if (!tipCalculatorState) throw new Error('TipStateContext not loaded');

  return (
    <div class="result">
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Tip Amount</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        <h2 class="result__value">
          {currencyFormatter.format(tipCalculatorState.tipPerPerson)}
        </h2>
      </div>
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Total</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        <h2 class="result__value">
          {currencyFormatter.format(tipCalculatorState.totalBillPerPerson)}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
}
