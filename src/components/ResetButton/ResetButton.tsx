import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {TipDispatchContext} from '../../utils/tipCalculatorContext';
import './ResetButton.css';

export function ResetButton(): JSX.Element {
  const dispatch = useContext(TipDispatchContext);
  if (!dispatch) throw new Error('TipDispatchContext not loaded');

  const handleReset = (): void => {
    dispatch({type: 'RESET'});
  };

  return (
    <div class="reset" onClick={handleReset}>
      Reset
    </div>
  );
}
