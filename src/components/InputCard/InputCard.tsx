import {useContext} from 'react';
import TipContext from '../../context/tipContext';
import TipPercentageBoxes from '../TipPercentageBoxes/TipPercentageBoxes';
import {TipCalculatorContextType} from '../../@types/tipCalculatorData';
import iconDollar from '../../assets/icon-dollar.svg';
import iconPerson from '../../assets/icon-person.svg';
import styles from '@/styles/InputCard.module.css';

export default function InputCard() {
  const {
    tipCalculatorData,
    handleBillChange,
    handlePeopleChange,
    handleInputBlur,
  } = useContext(TipContext) as TipCalculatorContextType;

  return (
    <div className={styles['input']}>
      <h2
        className={
          tipCalculatorData.billError
            ? styles['input__header--error']
            : undefined
        }
      >
        Bill
      </h2>
      <div className={styles['input__wrapper']}>
        {tipCalculatorData.billError ? (
          <span className={styles['input__message--error']}>
            {tipCalculatorData.billError}
          </span>
        ) : null}
        <img
          src={iconDollar}
          alt="icon-dollar"
          className={`${
            tipCalculatorData.billError
              ? styles['input__icon--error']
              : undefined
          }`}
        />
        <input
          type="text"
          className={`${styles['input__input']} ${
            tipCalculatorData.billError
              ? styles['input__input--error']
              : undefined
          }`}
          placeholder={'0'}
          value={tipCalculatorData.billAmount || ''}
          onChange={handleBillChange}
          onBlur={handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        className={
          tipCalculatorData.numPeopleError
            ? styles['input__header--error']
            : undefined
        }
      >
        Number of People
      </h2>
      <div className={styles['input__wrapper']}>
        {tipCalculatorData.numPeopleError ? (
          <span className={styles['input__message--error']}>
            {tipCalculatorData.numPeopleError}
          </span>
        ) : null}
        <img
          src={iconPerson}
          alt="icon-person"
          className={
            tipCalculatorData.numPeopleError
              ? styles['input__icon--error']
              : undefined
          }
        />
        <input
          type="text"
          className={`${styles['input__input']} ${
            tipCalculatorData.numPeopleError
              ? styles['input__input--error']
              : undefined
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
