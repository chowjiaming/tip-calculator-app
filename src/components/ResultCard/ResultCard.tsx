import {useContext, useEffect} from 'react';
import TipContext from '@/src/context/tipContext';
import ResultContext from '@/src/context/resultContext';
import {currencyFormatter} from '@/src/helpers/formatter';
import ResetButton from '@/src/components/ResetButton/ResetButton';
import styles from '@/styles/ResultCard.module.css';

const ResultCard: React.FC = () => {
  const tipContext = useContext(TipContext);
  const resultContext = useContext(ResultContext);

  if (!tipContext || !resultContext)
    throw new Error('Contexts are not defined');

  useEffect(() => {
    if (tipContext.tipCalculatorData.numPeople) {
      resultContext.setTipResultData({
        totalTipAmount:
          tipContext.tipCalculatorData.billAmount *
          (tipContext.tipCalculatorData.tipPercentage * 0.01),
        tipPerPerson:
          (tipContext.tipCalculatorData.billAmount *
            (tipContext.tipCalculatorData.tipPercentage * 0.01)) /
          tipContext.tipCalculatorData.numPeople,
      });
    } else if (!tipContext.tipCalculatorData.billAmount) {
      resultContext.setTipResultData({
        tipPerPerson: 0,
        totalTipAmount: 0,
      });
    }
  }, [tipContext.tipCalculatorData, resultContext]);

  return (
    <div className={styles['result']}>
      <div className={styles['result__container']}>
        <div
          className={`${styles['result__container']} ${styles['result__container--inner']}`}
        >
          <h2 className={styles['result__heading']}>Tip Amount</h2>
          <p className={styles['result__paragraph']}>/ person</p>
        </div>
        <h2 className={styles['result__value']}>
          {currencyFormatter.format(resultContext.tipResultData.totalTipAmount)}
        </h2>
      </div>
      <div className={styles['result__container']}>
        <div
          className={`${styles['result__container']} ${styles['result__container--inner']}`}
        >
          <h2 className={styles['result__heading']}>Total</h2>
          <p className={styles['result__paragraph']}>/ person</p>
        </div>
        <h2 className={styles['result__value']}>
          {currencyFormatter.format(resultContext.tipResultData.tipPerPerson)}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
};

export default ResultCard;
