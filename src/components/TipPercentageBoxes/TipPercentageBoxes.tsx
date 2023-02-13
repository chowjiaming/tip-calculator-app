import {Fragment, useContext} from 'react';
import TipContext from '@/src/context/tipContext';
import {tipPercetageOptions} from '@/src/config/tipPercentageOptions';
import TipPercentageBox from '@/src/components/TipPercentageBoxes/TipPercentageBox/TipPercentageBox';
import styles from '@/styles/TipPercentageBoxes.module.css';
import inputCardStyles from '@/styles/InputCard.module.css';
import tipPercentageBoxStyles from '@/styles/TipPercentageBox.module.css';

const TipPercentageBoxes: React.FC = () => {
  const tipContext = useContext(TipContext);

  if (!tipContext) throw new Error('Context is not defined');

  const standardOptions: React.ReactElement[] = tipPercetageOptions.map(
    (percentage) => {
      return <TipPercentageBox key={percentage} percentage={percentage} />;
    }
  );

  return (
    <Fragment>
      <h2
        className={
          tipContext.tipCalculatorState.billError
            ? inputCardStyles['input__header--error']
            : undefined
        }
      >
        Select Tip %
      </h2>
      <div className={styles['percentage']}>
        {standardOptions}
        <div className={styles['percentage__custom']}>
          {tipContext.tipCalculatorState.tipPercentageError ? (
            <span className={inputCardStyles['input__message--error']}>
              {tipContext.tipCalculatorState.tipPercentageError}
            </span>
          ) : null}
          <input
            className={`${tipPercentageBoxStyles['percentage__box']} ${
              tipPercentageBoxStyles['percentage__box--custom']
            } ${inputCardStyles['input__input']} ${
              tipContext.tipCalculatorState.tipPercentageError
                ? inputCardStyles['input__input--error']
                : undefined
            }`}
            placeholder="Custom"
            value={tipContext.tipCalculatorState.customTipPercentage || ''}
            onChange={tipContext.handleCustomTip}
            onBlur={tipContext.handleInputBlur}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TipPercentageBoxes;
