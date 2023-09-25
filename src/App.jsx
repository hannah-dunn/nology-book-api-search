import { useState } from "react";
import { getBooks } from "./services/getBooks";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./containers/BookGrid/BookGrid";

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
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
      <BookGrid searchTerm={searchTerm} items={items}></BookGrid>
    </>
  );
}

export default App;
