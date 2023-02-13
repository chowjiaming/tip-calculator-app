import {useContext} from 'react';
import TipContext from '@/src/context/tipContext';
import {currencyFormatter} from '@/src/helpers/formatter';
import ResetButton from '@/src/components/ResetButton/ResetButton';
import styles from '@/styles/ResultCard.module.css';

const ResultCard: React.FC = () => {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Contexts are not defined');

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
          {currencyFormatter.format(tipContext.tipCalculatorState.totalAmount)}
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
          {currencyFormatter.format(tipContext.tipCalculatorState.tipAmount)}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
};

export default ResultCard;
