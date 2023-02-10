import {TipProvider} from '@/src/context/tipContext';
import Attributions from '@/src/layout/Attributions/Attributions';
import TipCalculator from '@/src/layout/TipCalculator/TipCalculator';
import Title from '@/src/layout/Title/Title';
import Meta from '@/src/Meta';
import styles from '@/styles/Home.module.css';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <div className={styles['app']}>
      <Meta />
      <Title />
      <TipProvider>
        <TipCalculator />
      </TipProvider>
      <Attributions />
    </div>
  );
};

export default Home;