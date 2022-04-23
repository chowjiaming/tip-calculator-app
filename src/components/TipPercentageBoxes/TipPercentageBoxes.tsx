import { Fragment, useContext } from 'react';
import TipContext from '../../context/tipContext';
import { TipCalculatorContextType } from '../../@types/tipCalculatorData';
import { tipPercetageOptions } from '../../config/tipPercentageOptions';
import TipPercentageBox from './TipPercentageBox/TipPercentageBox';
import './TipPercentageBoxes.css';

const TipPercentageBoxes: React.FC = () => {
  const { tipCalculatorData, handleCustomTip, handleInputBlur } = useContext(
    TipContext,
  ) as TipCalculatorContextType;

  const standardOptions: React.ReactElement[] = tipPercetageOptions.map(
    (percentage) => {
      return <TipPercentageBox key={percentage} percentage={percentage} />;
    },
  );

  return (
    <Fragment>
      <h2
        className={`input__header ${
          tipCalculatorData.tipPercentError ? 'input__header--error' : ''
        }`}
      >
        Select Tip %
      </h2>
      <div className="percentage">
        {standardOptions}
        <div className="percentage__custom">
          {tipCalculatorData.tipPercentError ? (
            <span className="input__message input__message--error">
              {tipCalculatorData.tipPercentError}
            </span>
          ) : null}
          <input
            className={`percentage__box percentage__box--custom input__input ${
              tipCalculatorData.tipPercentError ? 'input__input--error' : ''
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
