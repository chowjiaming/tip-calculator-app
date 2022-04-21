import InputCard from "../../components/InputCard/InputCard";
import ResultCard from "../../components/ResultCard/ResultCard";
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
