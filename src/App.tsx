import { TipProvider } from "./context/tipContext.js";
import Title from "./layout/Title/Title";
import TipCalculator from "./layout/TipCalculator/TipCalculator";
import Attributions from "./layout/Attributions/Attributions";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <TipProvider>
        <TipCalculator />
      </TipProvider>
      <Attributions />
    </div>
  );
};

export default App;
