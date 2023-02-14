import {useContext} from 'react';
import {TipContext} from '@/src/context/tipContext';
import styles from '@/styles/ResetButton.module.css';

export function ResetButton(): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  const handleReset = (): void => {
    tipContext.dispatch({type: 'RESET'});
  };

  return (
    <div className={styles['reset']} onClick={handleReset}>
      Reset
    </div>
  );
}
