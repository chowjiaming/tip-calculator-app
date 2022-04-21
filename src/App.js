import { TipProvider } from "./context/tipContext";
import Title from "./components/Title/Title";
import TipCalculator from "./components/TipCalculator/TipCalculator";
import Attributions from "./components/Attributions/Attributions";
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
