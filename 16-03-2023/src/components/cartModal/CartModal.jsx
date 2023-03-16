import "./index.css";

import CartItem from "../cartItem/CartItem";

const CartModal = ({ isCartActive, setCartActive, cartList, setCartList }) => {
  const closeCart = () => {
    setCartActive(false);
  };
  return (
    <div className={`CartModal ${isCartActive && "active"}`}>
      <div className="cartOverflow" onClick={closeCart}></div>
      <div className="cart">
        {cartList.map((product) => (
          <CartItem
            productData={product}
            setCartList={setCartList}
            cartList={cartList}
          />
        ))}
      </div>
    </div>
  );
};

export default CartModal;
