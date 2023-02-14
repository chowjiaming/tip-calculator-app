import type {JSX} from 'preact/jsx-runtime';
import {TipProvider} from './context/tipContext';
import {Attributions} from './layout/Attributions/Attributions';
import {TipCalculator} from './layout/TipCalculator/TipCalculator';
import {Title} from './layout/Title/Title';
import './app.css';

export function App(): JSX.Element {
  return (
    <div className="app-container">
      <Title />
      <TipProvider>
        <TipCalculator />
      </TipProvider>
      <Attributions />
    </div>
  );
}
