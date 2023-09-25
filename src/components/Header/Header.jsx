import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <h1 className={styles.heading}>Google Books API Search Engine</h1>
      <p className={styles.heading_prompt}>
        Enter titles, keywords or authors to find your book
      </p>
    </header>
  );
};

export default Header;
