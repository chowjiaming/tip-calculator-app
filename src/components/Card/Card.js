import InputCard from "./InputCard/InputCard";
import ResultCard from "./ResultCard/ResultCard";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <InputCard />
      <ResultCard />
    </div>
  );
}
