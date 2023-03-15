import "./index.css";

const Card = ({ productData }) => {
  return (
    <div className="Card">
      <img
        className="CardImage"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="addToCartOver">
        <img src="https://img.icons8.com/external-nawicon-mixed-nawicon/512/external-Add-To-Cart-ecommerce-nawicon-mixed-nawicon.png" />
      </div>
      <div className="CardText">
        <h3 className="CardTitle">{productData.title.slice(0, 30)}</h3>
      </div>
      <div className="CardDetails">
        <p className="CardCategory">{productData.category}</p>
        <p className="CardPrice">{productData.price}$</p>
      </div>
    </div>
  );
};

export default Card;
