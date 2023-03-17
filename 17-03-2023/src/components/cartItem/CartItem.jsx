import "./index.css";

const CartItem = ({ productData, setCartList, cartList }) => {
  const deleteItem = () => {
    localStorage.setItem(
      "cartList",
      JSON.stringify([...cartList.filter((item) => item !== productData)])
    );

    setCartList([...cartList.filter((item) => item !== productData)]);
  };

  return (
    <div className="CartItem">
      <img src={productData.thumbnail} alt={productData.title} />
      <h4>{productData.title}</h4>
      <h6>{productData.price}$</h6>
      <button className="cartItemDeleteBtn" onClick={deleteItem}>
        <img
          src="https://img.icons8.com/ios-glyphs/512/trash.png"
          alt="deleteBtn"
        />
      </button>
    </div>
  );
};

export default CartItem;
