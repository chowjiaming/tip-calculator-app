import { createContext, useState } from "react";

const TipContext = createContext();

const initialInputState = {
    billAmount: 0,
    tipPercentage: 5,
    customTipPercentage: null,
    numPeople: 0,
  },
  initialResultState = { tipPerPerson: 0, totalTipAmount: 0 },
  initialErrorState = { bill: "", tip: "", people: "" };

export const TipProvider = ({ children }) => {
  const [inputData, setInputData] = useState(initialInputState);
  const [tipResult, setTipResult] = useState(initialResultState);
  const [errors, setErrors] = useState(initialErrorState);

  return (
    <TipContext.Provider
      value={{
        inputData,
        setInputData,
        errors,
        setErrors,
        tipResult,
        setTipResult,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
