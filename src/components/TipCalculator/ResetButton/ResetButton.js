import { useContext } from "react";
import TipContext from "../../../context/tipContext";
import "./ResetButton.css";

export default function ResetButton() {
  const { handleReset } = useContext(TipContext);

  return (
    <div className="reset-button" onClick={handleReset}>
      Reset
    </div>
  );
}
