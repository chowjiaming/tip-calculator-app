import {createContext, useState} from 'react';
import {
  TipCalculatorContextType,
  ITipCalculatorData,
} from '../@types/tipCalculatorData';

import {reNum, reTip, reBill, rePeople} from '../helpers/validators';

type TipContextProviderProps = {
  children: React.ReactNode;
};

const TipContext = createContext<TipCalculatorContextType | null>(null);

export const TipProvider = ({children}: TipContextProviderProps) => {
  const [tipCalculatorData, setTipCalculatorData] =
    useState<ITipCalculatorData>({
      billAmount: 0,
      tipPercentage: 5,
      customTipPercentage: 0,
      numPeople: 0,
      billError: '',
      tipPercentError: '',
      numPeopleError: '',
    });

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value && !reNum.test(e.target.value)) {
      setTipCalculatorData({...tipCalculatorData, billError: 'NaN :))'});
    } else if (e.target.value && !reBill.test(e.target.value)) {
      setTipCalculatorData({
        ...tipCalculatorData,
        billError: 'Dollars do not make cents :))',
      });
    } else if (e.target.value && Number(e.target.value) >= 100000) {
      setTipCalculatorData({
        ...tipCalculatorData,
        billError: 'Cannot compute :))',
      });
    } else {
      setTipCalculatorData({
        ...tipCalculatorData,
        billAmount: Number(e.target.value),
        billError: '',
      });
    }
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      setTipCalculatorData({...tipCalculatorData, numPeople: 0});
    } else if (!reNum.test(e.target.value)) {
      setTipCalculatorData({...tipCalculatorData, numPeopleError: 'NaN :))'});
    } else if (!rePeople.test(e.target.value)) {
      setTipCalculatorData({
        ...tipCalculatorData,
        numPeopleError: 'Too many people :))',
      });
    } else {
      setTipCalculatorData({
        ...tipCalculatorData,
        numPeople: Number(e.target.value),
        numPeopleError: '',
      });
    }
  };

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      setTipCalculatorData({
        ...tipCalculatorData,
        tipPercentage: 5,
        customTipPercentage: 0,
      });
    } else if (!reNum.test(e.target.value)) {
      setTipCalculatorData({
        ...tipCalculatorData,
        tipPercentError: 'NaN :))',
      });
    } else if (!reTip.test(e.target.value)) {
      setTipCalculatorData({
        ...tipCalculatorData,
        tipPercentError: 'Calm down :))',
      });
    } else {
      setTipCalculatorData({
        ...tipCalculatorData,
        tipPercentage: Number(e.target.value),
        customTipPercentage: Number(e.target.value),
        tipPercentError: '',
      });
    }
  };

  const handleInputBlur = (): void => {
    setTipCalculatorData({
      ...tipCalculatorData,
      billError: '',
      tipPercentError: '',
      numPeopleError: '',
    });
  };

  return (
    <TipContext.Provider
      value={{
        tipCalculatorData,
        setTipCalculatorData,
        handleBillChange,
        handlePeopleChange,
        handleCustomTip,
        handleInputBlur,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
