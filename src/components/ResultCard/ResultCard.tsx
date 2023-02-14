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
    <div className="result">
      <div className="result__container">
        <div className="result__container result__container--inner">
          <h2 className="result__heading">Tip Amount</h2>
          <p className="result__paragraph">/ person</p>
        </div>
        <h2 className="result__value">
          {currencyFormatter.format(tipContext.tipCalculatorState.tipPerPerson)}
        </h2>
      </div>
      <div className="result__container">
        <div className="result__container result__container--inner">
          <h2 className="result__heading">Total</h2>
          <p className="result__paragraph">/ person</p>
        </div>
        <h2 className="result__value">
          {currencyFormatter.format(
            tipContext.tipCalculatorState.totalBillPerPerson
          )}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
}
