import { useState, useEffect } from "react";
import CardsList from "./components/cardsList";
import Navbar from "./components/navbar";
import MiniCardList from "./components/MiniCardList/MiniCardList";
import Footer from "./components/footer/Footer";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [miniCards, setMiniCards] = useState([]);

  const [searchedCategory, setSearchedCategory] = useState(null);

  useEffect(() => {
    searchedCategory
      ? GET(`/products/category/${searchedCategory}`).then((data) =>
          setMiniCards(() => data.products)
        )
      : GET("/products").then((data) => setMiniCards(() => data.products));
  }, [searchedCategory]);

  return (
    <div className="App">
      <Navbar setSearchedCategory={setSearchedCategory} />
      <MiniCardList minicards={miniCards} />
      <CardsList
        title="Smartphones"
        endpoint="/products/category/smartphones"
      />
      <CardsList title="Laptops" endpoint="/products/category/laptops" />
      <CardsList title="Fragrances" endpoint="/products/category/fragrances" />
      <CardsList title="Skincare" endpoint="/products/category/skincare" />
      <Footer />
    </div>
  );
}

export default App;
