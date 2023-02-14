import {useContext} from 'react';
import {TipContext} from '@/src/context/tipContext';
import {TipPercentageBoxes} from '@/src/components/TipPercentageBoxes/TipPercentageBoxes';
import Image from 'next/image';
import styles from '@/styles/InputCard.module.css';

export function InputCard(): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    tipContext.dispatch({type: 'UPDATE_BILL', payload: Number(e.target.value)});
  };
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    tipContext.dispatch({
      type: 'UPDATE_PEOPLE',
      payload: Number(e.target.value),
    });
  };
  const handleInputBlur = (): void => {
    tipContext.dispatch({type: 'INPUT_BLUR'});
  };

  return (
    <div className={styles['input']}>
      <h2
        className={
          tipContext.tipCalculatorState.billError
            ? styles['input__header--error']
            : ''
        }
      >
        Bill
      </h2>
      <div className={styles['input__wrapper']}>
        {tipContext.tipCalculatorState.billError ? (
          <span className={styles['input__message--error']}>
            {tipContext.tipCalculatorState.billError}
          </span>
        ) : null}
        <div
          className={`${styles['input__icon']} ${
            tipContext.tipCalculatorState.billError
              ? styles['input__icon--error']
              : ''
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
            tipContext.tipCalculatorState.billError
              ? styles['input__input--error']
              : ''
          }`}
          placeholder={'0'}
          value={tipContext.tipCalculatorState.billAmount || ''}
          onChange={handleBillChange}
          onBlur={handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        className={
          tipContext.tipCalculatorState.numberOfPeopleError
            ? styles['input__header--error']
            : ''
        }
      >
        Number of People
      </h2>
      <div className={styles['input__wrapper']}>
        {tipContext.tipCalculatorState.numberOfPeopleError ? (
          <span className={styles['input__message--error']}>
            {tipContext.tipCalculatorState.numberOfPeopleError}
          </span>
        ) : null}
        <div
          className={`${styles['input__icon']} ${
            tipContext.tipCalculatorState.numberOfPeopleError
              ? styles['input__icon--error']
              : ''
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
            tipContext.tipCalculatorState.numberOfPeopleError
              ? styles['input__input--error']
              : ''
          }`}
          placeholder={'0'}
          value={tipContext.tipCalculatorState.numberOfPeople || ''}
          onChange={handlePeopleChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}
