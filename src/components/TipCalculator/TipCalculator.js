import InputCard from "./InputCard/InputCard";
import ResultCard from "./ResultCard/ResultCard";
import "./TipCalculator.css";

export default function TipCalculator() {
  return (
    <main className="main">
      <section className="main__calculator">
        <InputCard />
        <ResultCard />
      </section>
    </main>
  );
}
