import { ResultProvider } from '../../context/resultContext';
import InputCard from '../../components/InputCard/InputCard';
import ResultCard from '../../components/ResultCard/ResultCard';
import './TipCalculator.css';

const TipCalculator: React.FC = () => {
  return (
    <main className="main">
      <section className="main__calculator">
        <InputCard />
        <ResultProvider>
          <ResultCard />
        </ResultProvider>
      </section>
    </main>
  );
};

export default TipCalculator;
