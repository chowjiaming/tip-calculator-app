import {TipProvider} from '@/src/context/tipContext';
import Attributions from '@/src/layout/Attributions/Attributions';
import TipCalculator from '@/src/layout/TipCalculator/TipCalculator';
import Title from '@/src/layout/Title/Title';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <div className="App">
      <Title />
      <TipProvider>
        <TipCalculator />
      </TipProvider>
      <Attributions />
    </div>
  );
};

export default Home;
