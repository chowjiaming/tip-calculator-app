import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {TipDispatchContext} from '@/utils/tipCalculatorContext';
import '@/components/ResetButton/ResetButton.css';

/**
 * A button that resets the tip calculator form when clicked.
 *
 * @returns {JSX.Element} The JSX element for the reset button.
 * @throws {Error} If TipDispatchContext is not loaded.
 */
export function ResetButton(): JSX.Element {
  // Retrieve the tip calculator dispatch function from the context
  const dispatch = useContext(TipDispatchContext);
  if (!dispatch) throw new Error('TipDispatchContext not loaded');

  /**
   * Resets the tip calculator form by dispatching the RESET action to the context.
   *
   * @returns {void}
   */
  const handleReset = (): void => {
    dispatch({type: 'RESET'});
  };

  // Return the reset button JSX element
  return (
    <div class="reset" onClick={handleReset}>
      Reset
    </div>
  );
}
