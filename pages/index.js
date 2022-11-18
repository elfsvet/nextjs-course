import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    // to use two classes in the className with module
    // all three are valid options

    <div className={styles.container + ' ' + styles.main}>
      {/* <div className={[styles.container, styles.main].join(' ')}>  */}
      {/* <div className={`${styles.container} ${styles.main}`}> */}
      <h1>Hello Next World!</h1>
    </div>
  );
}
