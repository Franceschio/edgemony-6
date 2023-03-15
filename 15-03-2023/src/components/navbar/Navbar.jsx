import { useState } from "react";
import "./index.css";

const Navbar = ({ setSearchedCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInput = (e) => setInputValue(() => e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchedCategory(inputValue);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <form onSubmit={onSubmit}>
        <input
          className="searcher"
          value={inputValue}
          onChange={onInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
        <input type="submit" value="Search" className="searchBtn" />
      </form>
    </div>
  );
};

export default Navbar;
