import { useState, useEffect } from "react";
import CardsList from "./components/cardsList";
import Navbar from "./components/navbar";
import CartModal from "./components/cartModal/CartModal";
import MiniCardList from "./components/MiniCardList/MiniCardList";
import Footer from "./components/footer/Footer";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [miniCards, setMiniCards] = useState([]);

  const [searchedCategory, setSearchedCategory] = useState(null);

  const [isCartActive, setCartActive] = useState(false);

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    searchedCategory
      ? GET(`/products/category/${searchedCategory}`).then((data) =>
          setMiniCards(() => data.products)
        )
      : GET("/products").then((data) => setMiniCards(() => data.products));
  }, [searchedCategory]);

  return (
    <div className="App">
      <Navbar
        setSearchedCategory={setSearchedCategory}
        setCartActive={setCartActive}
        cartList={cartList}
      />
      <CartModal
        isCartActive={isCartActive}
        setCartActive={setCartActive}
        cartList={cartList}
        setCartList={setCartList}
      />
      <MiniCardList minicards={miniCards} />
      <CardsList
        title="Smartphones"
        endpoint="/products/category/smartphones"
        setCartList={setCartList}
      />
      <CardsList
        title="Laptops"
        endpoint="/products/category/laptops"
        setCartList={setCartList}
      />
      <CardsList
        title="Fragrances"
        endpoint="/products/category/fragrances"
        setCartList={setCartList}
      />
      <CardsList
        title="Skincare"
        endpoint="/products/category/skincare"
        setCartList={setCartList}
      />
      <Footer />
    </div>
  );
}

export default App;
