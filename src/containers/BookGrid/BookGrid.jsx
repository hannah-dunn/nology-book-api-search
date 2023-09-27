import React, { useState } from "react";
import styles from "./BookGrid.module.scss";

const BookGrid = ({ image, imageAlt, title, author, description }) => {
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
      style={isClicked ? { border: "2px solid black" } : null}
    >
      <div>
        {contentShown && <img src={image} alt={imageAlt}></img>}
        {contentShown && <h3>{title}</h3>}
        {contentShown && <p>{author ? `By ${author}` : null} </p>}
        {!contentShown && (
          <div>
            <h3>More information:</h3>
            {description && (
              <div className={styles.description}>
                <p>Description:</p>
                <span>{description}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default BookGrid;
