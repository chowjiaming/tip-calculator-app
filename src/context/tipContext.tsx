import {createContext, useReducer} from 'react';
import {
  initialTipCalculatorState,
  tipCalculatorReducer,
  TipCalculatorState,
} from '@/src/utils/tipCalculatorReducer';

// import {reNum, reTip, reBill, rePeople} from '@/src/helpers/validators';

type TipContextProviderProps = {
  children: React.ReactNode;
};

type TipCalculatorContextType = {
  tipCalculatorState: TipCalculatorState;
  handleBillChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePeopleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomTip: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: () => void;
  handleTipBoxClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleReset: () => void;
};

const TipContext = createContext<TipCalculatorContextType | null>(null);

export const TipProvider = ({children}: TipContextProviderProps) => {
  const [tipCalculatorState, dispatch] = useReducer(
    tipCalculatorReducer,
    initialTipCalculatorState
  );
  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'UPDATE_BILL', payload: Number(e.target.value)});
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'UPDATE_PEOPLE', payload: Number(e.target.value)});
  };

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'UPDATE_CUSTOM_TIP', payload: Number(e.target.value)});
  };

  const handleInputBlur = (): void => {
    dispatch({type: 'INPUT_BLUR'});
  };

  const handleTipBoxClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    dispatch({type: 'UPDATE_TIP', payload: parseInt(e.currentTarget.title)});
  };

  const handleReset = (): void => {
    dispatch({type: 'RESET'});
  };

  return (
    <TipContext.Provider
      value={{
        tipCalculatorState,
        handleBillChange,
        handlePeopleChange,
        handleCustomTip,
        handleInputBlur,
        handleTipBoxClick,
        handleReset,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
