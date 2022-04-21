import { TipProvider } from "./context/tipContext";
import Title from "./layout/Title/Title";
import TipCalculator from "./layout/TipCalculator/TipCalculator";
import Attributions from "./layout/Attributions/Attributions";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <TipProvider>
        <TipCalculator />
      </TipProvider>
      <Attributions />
    </div>
  );
}

export default App;
