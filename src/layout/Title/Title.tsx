import styles from '@/styles/Title.module.css';

export function Title(): JSX.Element {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title__text']}>spli</h1>
      <h1 className={styles['title__text']}>tter</h1>
    </header>
  );
}
