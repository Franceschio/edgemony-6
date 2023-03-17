import "./index.css";

const CardDetails = ({ productDetails, setCardDetails, setCartList }) => {
  const closeCardDetails = () => {
    setCardDetails(() => null);
  };

  const openImage = (img) => {
    window.open(img, "_blank");
  };

  const addToCart = () => {
    setCartList((prev) => [
      ...prev.filter((item) => item.id !== productDetails.id),
      productDetails,
    ]);
  };

  return (
    <div className="cardDetailsModal">
      <div className="cardDetailsOverflow" onClick={closeCardDetails}></div>
      <div className="CardDetails">
        <div className="closeDetails" onClick={closeCardDetails}>
          X
        </div>
        <div className="addToCart" onClick={addToCart}>
          <img
            src="https://img.icons8.com/dotty/512/shopping-cart.png"
            alt="add to cart"
          />
        </div>
        <h1>{productDetails.title}</h1>
        <div className="images">
          {productDetails.images.map((image) => (
            <img
              src={image}
              alt="Product image"
              onClick={() => openImage(image)}
              key={image}
            />
          ))}
        </div>
        <div className="description">
          <p>{productDetails.description}</p>
          <div className="details">
            <span>Brand: {productDetails.brand}</span>
            <span>Category: {productDetails.category}</span>
            <span>Price: {productDetails.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
