import {useContext} from 'react';
import TipContext from '@/src/context/tipContext';
import styles from '@/styles/ResetButton.module.css';

const ResetButton: React.FC = () => {
  const tipContext = useContext(TipContext);

  if (!tipContext) throw new Error('TipContext is not defined');

  return (
    <div className={styles['reset']} onClick={tipContext.handleReset}>
      Reset
    </div>
  );
};

export default ResetButton;
