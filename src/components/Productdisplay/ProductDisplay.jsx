import React, { useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
function ProductDisplay(props) {
  const { product } = props;
  const Sizes = ["S", "M", "L", "XL", "XXL"];
  const [size, setsize] = useState(null);
  return (
    <div className="product-container">
      <div className="product-container-left">
        <div className="display-product-left">
          <div className="product-small">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>

          <div className="product-big">
            <img src={product.image} alt="" />
          </div>
        </div>
      </div>
      <div className="product-container-right">
        <h1>{product.name}</h1>
        <div className="review">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" /> <p>(122)</p>
        </div>
        <div className="product-price">
          <p className="new-price">$ {product.new_price}</p>
          <p className="old-price">$ {product.old_price}</p>
        </div>
        <p className="product-description">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto
          quos labore sed temporibus voluptas ratione, iste hic et provident,
          eum explicabo beatae illum vitae mollitia ex enim sint doloribus?
        </p>
        <h1 className="select-size">Select size</h1>
        <div className="size-selection">
          {Sizes.map((item, i) => {
            return <button key={item} onClick={()=>setsize(item)} className={ size===item ? "active" : ''}>{item}</button>;
          })}
          {/* <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button> */}
        </div>
        <button className="add-to-cart"> Add to cart</button>
        <div className="product-info">
          <h3>
            {" "}
            Category : <span> {product.category}</span>{" "}
          </h3>
          <h3>
            {" "}
            Tags : <span> Modern , latest</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
