import React, { useState } from "react";
import styles from "./BookGrid.module.scss";

const BookGrid = ({
  image,
  imageAlt,
  title,
  author,
  description,
  datePublished,
}) => {
  let gridContent = styles.content;

  const [contentShown, setContentShown] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <article
      className={gridContent}
      onClick={() => {
        setContentShown(!contentShown);
        setIsClicked(!isClicked);
      }}
      style={isClicked ? { border: " 2px solid #00b4cc" } : null}
    >
      <div className={styles.content_wrapper}>
        {contentShown && <img src={image} alt={imageAlt}></img>}
        {contentShown && <h3>{title}</h3>}
        {contentShown && <p>{author ? `By ${author}` : null} </p>}
        {contentShown && <h4>Click card for more information about book</h4>}
        {!contentShown && (
          <div>
            {description && (
              <div className={styles.description}>
                <p>Description:</p>
                <span>{description}</span>
              </div>
            )}
            {datePublished && <p>Published on {datePublished}</p>}
          </div>
        )}
      </div>
    </article>
  );
};

export default BookGrid;
