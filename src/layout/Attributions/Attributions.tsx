import styles from '@/styles/Attributions.module.css';

const Attributions: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <div>
        Design inspired by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/chowjiaming"
          target="_blank"
          rel="noreferrer"
        >
          Joseph Chow
        </a>
        .
      </div>
    </footer>
  );
};

export default Attributions;
