import { createContext, useState, useEffect } from "react";
import { reNum, reBill, reTip, rePeople } from "../helpers/validators";

const TipContext = createContext();

const initialInputState = {
    billAmount: 0,
    tipPercentage: 5,
    customTipPercentage: null,
    numPeople: 0,
    numPeopleError: false,
    tipPercentageError: false,
  },
  initialResultState = { tipPerPerson: 0, totalTipAmount: 0 };

export const TipProvider = ({ children }) => {
  const [inputData, setInputData] = useState(initialInputState);
  const [tipResult, setTipResult] = useState(initialResultState);

  const [errors, setErrors] = useState({ bill: "", tip: "", people: "" });

  useEffect(() => {
    if (inputData.numPeople) {
      setTipResult({
        totalTipAmount: inputData.billAmount * (inputData.tipPercentage * 0.01),
        tipPerPerson:
          (inputData.billAmount * (inputData.tipPercentage * 0.01)) /
          inputData.numPeople,
      });
    } else if (!inputData.billAmount) {
      setTipResult(initialResultState);
    }
  }, [inputData]);

  const handleBillChange = (e) => {
    if (!e.target.value || reNum.test(e.target.value)) {
      if (e.target.value && !reBill.test(e.target.value)) {
        setErrors({ ...errors, bill: "Dollars don't make cents :))" });
      } else if (e.target.value && Number(e.target.value) >= 100000) {
        setErrors({ ...errors, bill: "Cannot compute :))" });
      } else {
        setInputData({ ...inputData, billAmount: e.target.value });
        setErrors({ ...errors, bill: "" });
      }
    }
  };

  const handleTipBoxClick = (e) => {
    setInputData({
      ...inputData,
      tipPercentage: parseInt(e.target.id),
      customTipPercentage: null,
      tipPercentageError: false,
    });
  };

  const handleCustomTip = (e) => {
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        tipPercentage: 0,
        customTipPercentage: 0,
      }));
    } else if (!reTip.test(e.target.value)) {
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

  const handlePeopleChange = (e) => {
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        numPeople: 0,
      }));
    } else if (!rePeople.test(e.target.value)) {
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

  const handleReset = () => {
    setInputData(initialInputState);
  };

  return (
    <TipContext.Provider
      value={{
        inputData,
        errors,
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
