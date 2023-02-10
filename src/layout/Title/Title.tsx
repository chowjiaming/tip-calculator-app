import styles from '@/styles/Title.module.css';

const Title: React.FC = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title__text']}>spli</h1>
      <h1 className={styles['title__text']}>tter</h1>
    </header>
  );
};

export default Title;
