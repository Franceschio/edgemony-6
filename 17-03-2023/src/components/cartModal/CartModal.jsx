import "./index.css";

import CartItem from "../cartItem/CartItem";

const CartModal = ({ isCartActive, setCartActive, cartList, setCartList }) => {
  const closeCart = () => {
    setCartActive(false);
  };

  const deleteAllItems = () => {
    localStorage.setItem("cartList", JSON.stringify([]));

    setCartList(() => []);
  };
  return (
    <div className={`CartModal ${isCartActive && "active"}`}>
      <div className="cartOverflow" onClick={closeCart}></div>
      <div className="cart">
        <button className="deleteAllItems" onClick={deleteAllItems}>
          Delete all
        </button>
        {cartList.map((product) => (
          <CartItem
            productData={product}
            setCartList={setCartList}
            cartList={cartList}
            key={product.id}
          />
        ))}
        <h2 className="cartTotal">
          Totale:{" "}
          {cartList.reduce(
            (accumulator, product) => accumulator + product.price,
            0
          )}
          $
        </h2>
      </div>
    </div>
  );
};

export default CartModal;
