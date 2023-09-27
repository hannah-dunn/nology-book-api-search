import { useState } from "react";
import { getBooks } from "./services/getBooks";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./containers/BookGrid/BookGrid";
import Footer from "./components/Footer/Footer";
import BookList from "./components/BookList/BookList";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [items, setItems] = useState([]);

  const fetchBooks = async (searchTerm) => {
    const data = await getBooks(searchTerm);
    setItems(data.items || []);
  };

  const handleSubmit = (value) => {
    setSearchTerm(value);
    fetchBooks(value);
  };

  return (
    <>
      <div className={styles.background}>
        <Header />
        <SearchBar handleSubmit={handleSubmit} />
        <BookGrid searchTerm={searchTerm} items={items}></BookGrid>
        <BookList searchTerm={searchTerm} items={items} />
        <Footer />
      </div>
    </>
  );
}

export default App;
