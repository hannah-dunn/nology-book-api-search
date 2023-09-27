import style from "./SearchBar.module.scss";
import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [input, setInput] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form id="search" className={style.searchbar_form} onSubmit={formSubmit}>
      <input
        className={style.searchbar_input}
        type="text"
        placeholder="Keywords, title, authors..."
        value={input}
        onChange={onInputChange}
        id="searchInput"
      />
      <button className={style.searchbar_button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
