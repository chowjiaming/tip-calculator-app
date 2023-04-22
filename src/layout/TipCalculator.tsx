import type {JSX} from 'preact/jsx-runtime';
import {InputCard} from '@/components/InputCard';
import {ResultCard} from '@/components/ResultCard';

/**
 * The main component for the tip calculator.
 * Renders the input and result cards for the calculator.
 *
 * @returns {JSX.Element} The rendered component.
 */
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
