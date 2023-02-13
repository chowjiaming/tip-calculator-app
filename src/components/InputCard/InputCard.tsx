import {useContext} from 'react';
import Image from 'next/image';
import TipContext from '@/src/context/tipContext';
import TipPercentageBoxes from '@/src/components/TipPercentageBoxes/TipPercentageBoxes';
import styles from '@/styles/InputCard.module.css';

export default function InputCard() {
  const tipContext = useContext(TipContext);

  if (!tipContext) throw new Error('TipContext is not defined');

  return (
    <div className={styles['input']}>
      <h2
        className={
          tipContext.tipCalculatorData.billError
            ? styles['input__header--error']
            : undefined
        }
      >
        Bill
      </h2>
      <div className={styles['input__wrapper']}>
        {tipContext.tipCalculatorData.billError ? (
          <span className={styles['input__message--error']}>
            {tipContext.tipCalculatorData.billError}
          </span>
        ) : null}
        <div
          className={`${styles['input__icon']} ${
            tipContext.tipCalculatorData.billError
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
            tipContext.tipCalculatorData.billError
              ? styles['input__input--error']
              : undefined
          }`}
          placeholder={'0'}
          value={tipContext.tipCalculatorData.billAmount || ''}
          onChange={tipContext.handleBillChange}
          onBlur={tipContext.handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        className={
          tipContext.tipCalculatorData.numPeopleError
            ? styles['input__header--error']
            : undefined
        }
      >
        Number of People
      </h2>
      <div className={styles['input__wrapper']}>
        {tipContext.tipCalculatorData.numPeopleError ? (
          <span className={styles['input__message--error']}>
            {tipContext.tipCalculatorData.numPeopleError}
          </span>
        ) : null}
        <div
          className={`${styles['input__icon']} ${
            tipContext.tipCalculatorData.numPeopleError
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
            tipContext.tipCalculatorData.numPeopleError
              ? styles['input__input--error']
              : undefined
          }`}
          placeholder={'0'}
          value={tipContext.tipCalculatorData.numPeople || ''}
          onChange={tipContext.handlePeopleChange}
          onBlur={tipContext.handleInputBlur}
        />
      </div>
    </div>
  );
}
