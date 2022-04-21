import { createContext, useState, useEffect } from "react";

const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const [inputData, setInputData] = useState({
    billAmount: 0,
    tipPercentage: 5,
    customTipPercentage: null,
    numPeople: 0,
    billAmountError: false,
    numPeopleError: false,
    tipPercentageError: false,
  });
  const [tipResult, setTipResult] = useState({
    tipPerPerson: 0,
    totalTipAmount: 0,
  });

  useEffect(() => {
    if (inputData.numPeople) {
      setTipResult({
        totalTipAmount: inputData.billAmount * (inputData.tipPercentage * 0.01),
        tipPerPerson:
          (inputData.billAmount * (inputData.tipPercentage * 0.01)) /
          inputData.numPeople,
      });
    } else if (!inputData.billAmount) {
      setTipResult({
        totalTipAmount: 0,
        tipPerPerson: 0,
      });
    }
  }, [inputData]);

  const handleTipBoxClick = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      tipPercentage: parseInt(e.target.id),
      customTipPercentage: null,
      tipPercentageError: false,
    }));
  };

  const handlePeopleChange = (e) => {
    const re = /^\d+$/;
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        numPeople: 0,
      }));
    } else if (!re.test(e.target.value)) {
      e.target.value = inputData.numPeople;
    } else if (Number(e.target.value) > 100) {
      setInputData((prevState) => ({
        ...prevState,
        numPeopleError: true,
      }));
    } else {
      setInputData((prevState) => ({
        ...prevState,
        numPeople: e.target.value,
        numPeopleError: false,
      }));
    }
  };

  const handleBillChange = (e) => {
    const re = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        billAmount: 0,
      }));
    } else if (!re.test(e.target.value)) {
      e.target.value = inputData.billAmount;
    } else if (Number(e.target.value) >= 100000) {
      setInputData((prevState) => ({
        ...prevState,
        billAmountError: true,
      }));
    } else {
      setInputData((prevState) => ({
        ...prevState,
        billAmount: e.target.value,
        billAmountError: false,
      }));
    }
  };

  const handleCustomTip = (e) => {
    const re = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        tipPercentage: 0,
        customTipPercentage: 0,
      }));
    } else if (!re.test(e.target.value)) {
      setInputData((prevState) => ({
        ...prevState,
        tipPercentageError: true,
      }));
      e.target.value = inputData.tipPercentage;
    } else {
      setInputData((prevState) => ({
        ...prevState,
        tipPercentage: e.target.value,
        customTipPercentage: e.target.value,
        tipPercentageError: false,
      }));
    }
  };

  const handleReset = () => {
    setInputData({
      billAmount: 0,
      tipPercentage: 5,
      customTipPercetage: null,
      numPeople: 0,
      numPeopleError: false,
      billAmountError: false,
      tipPercentageError: false,
    });
  };

  return (
    <TipContext.Provider
      value={{
        inputData,
        tipResult,
        setTipResult,
        handleTipBoxClick,
        handlePeopleChange,
        handleBillChange,
        handleCustomTip,
        handleReset,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
