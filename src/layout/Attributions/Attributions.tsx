import styles from '@/styles/Attributions.module.css';

export function Attributions(): JSX.Element {
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
}
