
import styles from '../styles/HomePage.module.css';


function HomePage() {
  
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>DISCOVER</h1>
        <p className={styles.subtitle}>the Joy of Filmaking</p>
        <a href="#" className={styles.exploreBtn}>About Us</a>
      </div>
    </header>
  );
};

export default HomePage;
