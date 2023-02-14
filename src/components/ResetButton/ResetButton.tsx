import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {TipContext} from '../../context/tipContext';
import './ResetButton.css';

export function ResetButton(): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  const handleReset = (): void => {
    tipContext.dispatch({type: 'RESET'});
  };

  return (
    <div className="reset" onClick={handleReset}>
      Reset
    </div>
  );
}
