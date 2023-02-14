import type {JSX} from 'preact/jsx-runtime';
import {InputCard} from '../../components/InputCard/InputCard';
import {ResultCard} from '../../components/ResultCard/ResultCard';
import './TipCalculator.css';

export function TipCalculator(): JSX.Element {
  return (
    <main class="main">
      <section class="main__calculator">
        <InputCard />
        <ResultCard />
      </section>
    </main>
  );
}
