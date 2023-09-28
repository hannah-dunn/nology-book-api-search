import BookGrid from "../BookGrid/BookGrid";
import styles from "./BookList.module.scss";

const BookList = ({ items }) => {
  const filteredBooks = items.map((item) => {
    return {
      id: item.id,
      image: item.volumeInfo.imageLinks?.thumbnail,
      authors: item.volumeInfo.authors,
      title: item.volumeInfo.title,
      description: item.volumeInfo.description,
      datePublished: item.volumeInfo.publishedDate,
    };
  });

  let gridLayout = styles.grid;

  return (
    <>
      <div className={gridLayout}>
        {filteredBooks.map((book) => (
          <BookGrid
            key={book.id}
            image={book.image ? book.image + "&fife=w200-h300" : null}
            imageAlt={book.image ? "Cover image of " + book.title : null}
            title={book.title || null}
            author={book.authors ? book.authors.join(" & ") : null}
            description={book.description || null}
            datePublished={book.datePublished || null}
          />
        ))}
      </div>
    </>
  );
};

export default BookList;
