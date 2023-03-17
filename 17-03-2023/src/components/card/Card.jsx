import "./index.css";

const Card = ({ productData, setCartList, setCardDetails, cartList }) => {
  const addToCart = () => {
    localStorage.setItem(
      "cartList",
      JSON.stringify([
        ...cartList.filter((item) => item.id !== productData.id),
        productData,
      ])
    );

    setCartList((prev) => [
      ...prev.filter((item) => item.id !== productData.id),
      productData,
    ]);
  };

  const giveCardDetails = () => {
    setCardDetails(() => productData);
  };
  return (
    <div className="Card">
      <img
        className="CardImage"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="addToCartOver">
        <img
          src="https://img.icons8.com/external-nawicon-mixed-nawicon/512/external-Add-To-Cart-ecommerce-nawicon-mixed-nawicon.png"
          onClick={addToCart}
        />
      </div>
      <div className="CardText">
        <h3 className="CardTitle" onClick={giveCardDetails}>
          {productData.title.slice(0, 30)}
        </h3>
      </div>
      <div className="cardDetails">
        <span className="CardCategory">{productData.category}</span>
        <span className="CardPrice">{productData.price}$</span>
      </div>
    </div>
  );
};

export default Card;
