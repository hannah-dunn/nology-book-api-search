import styles from "./Header.module.scss";
import gif from "/booksbenmarriott.gif";

const Header = () => {
  return (
    <header>
      <h1 className={styles.heading}>Google Books API Search Engine</h1>
      <p className={styles.heading_prompt}>
        Enter titles, keywords or authors to find your book
      </p>
      <img className={styles.gif} src={gif} alt="book gif" />
    </header>
  );
};

export default Header;
