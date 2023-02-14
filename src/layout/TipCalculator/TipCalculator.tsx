import {InputCard} from '@/src/components/InputCard/InputCard';
import {ResultCard} from '@/src/components/ResultCard/ResultCard';
import styles from '@/styles/TipCalculator.module.css';

export function TipCalculator(): JSX.Element {
  return (
    <main className={styles['main']}>
      <section className={styles['main__calculator']}>
        <InputCard />
        <ResultCard />
      </section>
    </main>
  );
}
