import {useContext} from 'react';
import {TipContext} from '@/src/context/tipContext';
import {tipPercetageOptions} from '@/src/config/tipPercentageOptions';
import {TipPercentageBox} from '@/src/components/TipPercentageBoxes/TipPercentageBox/TipPercentageBox';
import styles from '@/styles/TipPercentageBoxes.module.css';
import inputCardStyles from '@/styles/InputCard.module.css';
import tipPercentageBoxStyles from '@/styles/TipPercentageBox.module.css';

export function TipPercentageBoxes(): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>): void => {
    tipContext.dispatch({
      type: 'UPDATE_CUSTOM_TIP',
      payload: Number(e.target.value),
    });
  };
  const handleInputBlur = (): void => {
    tipContext.dispatch({type: 'INPUT_BLUR'});
  };

  return (
    <>
      <h2
        className={
          tipContext.tipCalculatorState.tipPercentageError
            ? inputCardStyles['input__header--error']
            : ''
        }
      >
        Select Tip %
      </h2>
      <div className={styles['percentage']}>
        {tipPercetageOptions.map((percentage) => (
          <TipPercentageBox key={percentage} percentage={percentage} />
        ))}
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
                : ''
            }`}
            placeholder="Custom"
            value={tipContext.tipCalculatorState.customTipPercentage || ''}
            onChange={handleCustomTip}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </>
  );
}
