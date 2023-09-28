import gif from "/booksbenmarriott.gif";
import styles from "./Gif.module.scss";

const Gif = () => {
  return (
    <div>
      <img className={styles.gif} src={gif} alt="book gif" />
    </div>
  );
};

export default Gif;
