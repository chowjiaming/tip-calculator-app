import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {TipContext} from '../../context/tipContext';
import {currencyFormatter} from '../../helpers/formatter';
import {ResetButton} from '../ResetButton/ResetButton';
import './ResultCard.css';

export function ResultCard(): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Contexts are not defined');

  return (
    <div class="result">
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Tip Amount</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        <h2 class="result__value">
          {currencyFormatter.format(tipContext.tipCalculatorState.tipPerPerson)}
        </h2>
      </div>
      <div class="result__container">
        <div class="result__container result__container--inner">
          <h2 class="result__heading">Total</h2>
          <p class="result__paragraph">/ person</p>
        </div>
        <h2 class="result__value">
          {currencyFormatter.format(
            tipContext.tipCalculatorState.totalBillPerPerson
          )}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
}
