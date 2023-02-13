import {ResultProvider} from '@/src/context/resultContext';
import InputCard from '@/src/components/InputCard/InputCard';
import ResultCard from '@/src/components/ResultCard/ResultCard';
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
