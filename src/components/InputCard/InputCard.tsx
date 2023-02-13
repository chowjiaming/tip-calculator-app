import {useContext} from 'react';
import Image from 'next/image';
import TipContext from '@/src/context/tipContext';
import TipPercentageBoxes from '@/src/components/TipPercentageBoxes/TipPercentageBoxes';
import {TipCalculatorContextType} from '@/src/types';
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
        <div
          className={`${styles['input__icon']} ${
            tipCalculatorData.billError
              ? styles['input__icon--error']
              : undefined
          }`}
        >
          <Image
            src="/svg/icon-dollar.svg"
            alt="icon-dollar"
            width={12}
            height={17}
          />
        </div>
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
        <div
          className={`${styles['input__icon']} ${
            tipCalculatorData.numPeopleError
              ? styles['input__icon--error']
              : undefined
          }`}
        >
          <Image
            src="/svg/icon-person.svg"
            alt="icon-person"
            width={15}
            height={17}
          />
        </div>
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
