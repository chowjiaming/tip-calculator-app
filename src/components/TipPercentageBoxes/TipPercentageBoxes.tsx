import {Fragment, useContext} from 'react';
import TipContext from '@/src/context/tipContext';
import {TipCalculatorContextType} from '@/src/types';
import {tipPercetageOptions} from '@/src/config/tipPercentageOptions';
import TipPercentageBox from '@/src/components/TipPercentageBoxes/TipPercentageBox/TipPercentageBox';
import styles from '@/styles/TipPercentageBoxes.module.css';
import inputCardStyles from '@/styles/InputCard.module.css';
import tipPercentageBoxStyles from '@/styles/TipPercentageBox.module.css';

const TipPercentageBoxes: React.FC = () => {
  const {tipCalculatorData, handleCustomTip, handleInputBlur} = useContext(
    TipContext
  ) as TipCalculatorContextType;

  const standardOptions: React.ReactElement[] = tipPercetageOptions.map(
    (percentage) => {
      return <TipPercentageBox key={percentage} percentage={percentage} />;
    }
  );

  return (
    <Fragment>
      <h2
        className={
          tipCalculatorData.billError
            ? inputCardStyles['input__header--error']
            : undefined
        }
      >
        Select Tip %
      </h2>
      <div className={styles['percentage']}>
        {standardOptions}
        <div className={styles['percentage__custom']}>
          {tipCalculatorData.tipPercentError ? (
            <span className={inputCardStyles['input__message--error']}>
              {tipCalculatorData.tipPercentError}
            </span>
          ) : null}
          <input
            className={`${tipPercentageBoxStyles['percentage__box']} ${
              tipPercentageBoxStyles['percentage__box--custom']
            } ${inputCardStyles['input__input']} ${
              tipCalculatorData.tipPercentError
                ? inputCardStyles['input__input--error']
                : undefined
            }`}
            placeholder="Custom"
            value={tipCalculatorData.customTipPercentage || ''}
            onChange={handleCustomTip}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TipPercentageBoxes;
