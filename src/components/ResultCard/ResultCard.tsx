import { useContext, useEffect } from 'react';
import TipContext from '../../context/tipContext';
import { TipCalculatorContextType } from '../../@types/tipCalculatorData';
import ResultContext from '../../context/resultContext';
import { TipResultContextType } from '../../@types/tipResultData';
import { currencyFormatter } from '../../helpers/formatter';
import ResetButton from '../ResetButton/ResetButton';
import './ResultCard.css';

const ResultCard: React.FC = () => {
  const { tipCalculatorData } = useContext(
    TipContext,
  ) as TipCalculatorContextType;

  const { tipResultData, setTipResultData } = useContext(
    ResultContext,
  ) as TipResultContextType;

  useEffect(() => {
    if (tipCalculatorData.numPeople) {
      setTipResultData({
        totalTipAmount:
          tipCalculatorData.billAmount *
          (tipCalculatorData.tipPercentage * 0.01),
        tipPerPerson:
          (tipCalculatorData.billAmount *
            (tipCalculatorData.tipPercentage * 0.01)) /
          tipCalculatorData.numPeople,
      });
    } else if (!tipCalculatorData.billAmount) {
      setTipResultData({
        tipPerPerson: 0,
        totalTipAmount: 0,
      });
    }
  }, [tipCalculatorData, setTipResultData]);

  return (
    <div className="result">
      <div className="result__container">
        <div className="result__container result__container--inner">
          <h2 className="result__heading">Tip Amount</h2>
          <p className="result__paragraph">/ person</p>
        </div>
        <h2 className="result__value">
          {currencyFormatter.format(tipResultData.totalTipAmount)}
        </h2>
      </div>
      <div className="result__container">
        <div className="result__container result__container--inner">
          <h2 className="result__heading">Total</h2>
          <p className="result__paragraph">/ person</p>
        </div>
        <h2 className="result__value">
          {currencyFormatter.format(tipResultData.tipPerPerson)}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
};

export default ResultCard;
