import { createContext, useState, useEffect } from "react";
import { reNum, reBill, reTip, rePeople } from "../helpers/validators";

const TipContext = createContext();

const initialInputState = {
    billAmount: 0,
    tipPercentage: 5,
    customTipPercentage: null,
    numPeople: 0,
    numPeopleError: false,
  },
  initialResultState = { tipPerPerson: 0, totalTipAmount: 0 },
  initialErrorState = { bill: "", tip: "", people: "" };

export const TipProvider = ({ children }) => {
  const [inputData, setInputData] = useState(initialInputState);
  const [tipResult, setTipResult] = useState(initialResultState);

  const [errors, setErrors] = useState(initialErrorState);

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
    if (e.target.value && !reNum.test(e.target.value)) {
      setErrors({ ...errors, bill: "NaN :))" });
    } else if (e.target.value && !reBill.test(e.target.value)) {
      setErrors({ ...errors, bill: "Dollars don't make cents :))" });
    } else if (e.target.value && Number(e.target.value) >= 100000) {
      setErrors({ ...errors, bill: "Cannot compute :))" });
    } else {
      setInputData({ ...inputData, billAmount: e.target.value });
      setErrors({ ...errors, bill: "" });
    }
  };

  const handleTipBoxClick = (e) => {
    setInputData({
      ...inputData,
      tipPercentage: parseInt(e.target.id),
      customTipPercentage: null,
    });
    setErrors({ ...errors, tip: "" });
  };

  const handleCustomTip = (e) => {
    if (!e.target.value) {
      setInputData({ ...inputData, tipPercentage: 5, customTipPercentage: 0 });
    } else if (!reNum.test(e.target.value)) {
      setErrors({ ...errors, tip: "NaN :))" });
    } else if (!reTip.test(e.target.value)) {
      setErrors({ ...errors, tip: "Calm down :))" });
    } else {
      setInputData({
        ...inputData,
        tipPercentage: e.target.value,
        customTipPercentage: e.target.value,
      });
      setErrors({ ...errors, tip: "" });
    }
  };

  const handlePeopleChange = (e) => {
    if (!e.target.value) {
      setInputData({ ...inputData, numPeople: 0 });
    } else if (!reNum.test(e.target.value)) {
      setErrors({ ...errors, people: "NaN :))" });
    } else if (!rePeople.test(e.target.value)) {
      setErrors({ ...errors, people: "Too many people :))" });
    } else {
      setInputData({ ...inputData, numPeople: e.target.value });
      setErrors({ ...errors, people: "" });
    }
  };

  const handleInputBlur = () => {
    setErrors(initialErrorState);
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
        handleInputBlur,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
