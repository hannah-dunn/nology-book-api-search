import BookGrid from "../../containers/BookGrid/BookGrid";
import styles from "./BookList.module.scss";

const BookList = ({ searchTerm, items }) => {
  const filteredBooks = items.map((item) => {
    return {
      id: item.id,
      image: item.volumeInfo.imageLinks?.thumbnail,
      authors: item.volumeInfo.authors,
      title: item.volumeInfo.title,
      description: item.volumeInfo.description,
    };
  });

  let gridClasses = styles.grid;

  return (
    <>
      {/* {items && items.length > 0 ? ( */}
      <div className={gridClasses}>
        {filteredBooks.map((book) => (
          <BookGrid
            key={book.id}
            image={book.image ? book.image + "&fife=w200-h300" : null}
            imageAlt={book.image ? "Cover image of " + book.title : null}
            title={book.title || null}
            author={book.authors ? book.authors.join(" & ") : null}
            description={book.description || null}
          />
        ))}
      </div>
      {/* ) : (
        <p>{`Please enter a valid search term, ${searchTerm} is invalid.`}</p>
      )} */}
    </>
  );
};

export default BookList;
