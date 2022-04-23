import { useContext } from 'react';
import TipContext from '../../context/tipContext';
import TipPercentageBoxes from '../TipPercentageBoxes/TipPercentageBoxes';
import { TipCalculatorContextType } from '../../@types/tipCalculatorData';
import './InputCard.css';

export default function InputCard() {
  const {
    tipCalculatorData,
    handleBillChange,
    handlePeopleChange,
    handleInputBlur,
  } = useContext(TipContext) as TipCalculatorContextType;

  return (
    <div className="input">
      <h2
        className={`input__header ${
          tipCalculatorData.billError ? 'input__header--error' : ''
        }`}
      >
        Bill
      </h2>
      <div className="input__wrapper">
        {tipCalculatorData.billError ? (
          <span className="input__message input__message--error">
            {tipCalculatorData.billError}
          </span>
        ) : null}
        <img
          src="images/icon-dollar.svg"
          alt="icon-dollar"
          className={`input__icon ${
            tipCalculatorData.billError ? 'input__icon--error' : ''
          }`}
        />
        <input
          type="text"
          className={`input__input ${
            tipCalculatorData.billError ? 'input__input--error' : ''
          }`}
          placeholder={'0'}
          value={tipCalculatorData.billAmount || ''}
          onChange={handleBillChange}
          onBlur={handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        className={`input__header ${
          tipCalculatorData.numPeopleError ? 'input__header--error' : ''
        }`}
      >
        Number of People
      </h2>
      <div className="input__wrapper">
        {tipCalculatorData.numPeopleError ? (
          <span className="input__message input__message--error">
            {tipCalculatorData.numPeopleError}
          </span>
        ) : null}
        <img
          src="images/icon-person.svg"
          alt="icon-person"
          className={`input__icon ${
            tipCalculatorData.numPeopleError ? 'input__icon--error' : ''
          }`}
        />
        <input
          type="text"
          className={`input__input ${
            tipCalculatorData.numPeopleError ? 'input__input--error' : ''
          }`}
          placeholder={'0'}
          value={tipCalculatorData.numPeople || ''}
          onChange={handlePeopleChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}
