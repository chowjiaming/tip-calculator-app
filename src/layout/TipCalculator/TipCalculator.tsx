import {ResultProvider} from '../../context/resultContext';
import InputCard from '../../components/InputCard/InputCard';
import ResultCard from '../../components/ResultCard/ResultCard';
import styles from '@/styles/TipCalculator.module.css';

const TipCalculator: React.FC = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['main__calculator']}>
        <InputCard />
        <ResultProvider>
          <ResultCard />
        </ResultProvider>
      </section>
    </main>
  );
};

export default TipCalculator;
