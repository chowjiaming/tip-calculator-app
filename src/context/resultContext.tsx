import {createContext, useState} from 'react';
import {TipResultContextType, ITipResultData} from '@/src/types';

type ResultContextProviderProps = {
  children: React.ReactNode;
};

const ResultContext = createContext<TipResultContextType | null>(null);

export const ResultProvider = ({children}: ResultContextProviderProps) => {
  const [tipResultData, setTipResultData] = useState<ITipResultData>({
    tipPerPerson: 0,
    totalTipAmount: 0,
  });

  return (
    <ResultContext.Provider value={{tipResultData, setTipResultData}}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContext;
