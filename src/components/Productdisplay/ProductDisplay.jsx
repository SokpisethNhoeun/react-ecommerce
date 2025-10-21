import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay({ product }) {
  const Sizes = ["S", "M", "L", "XL", "XXL"];
  const [size, setsize] = useState(null);

  const ctx = useContext(ShopContext) || {};
  const addtocart = typeof ctx.addtocart === "function" ? ctx.addtocart : null;

  // toast queue state
  const [toasts, setToasts] = useState([]);

  const handleAddToCart = (id) => {
    if (addtocart) addtocart(id);

    const toastId = Date.now(); // unique ID
    setToasts((prev) => [...prev, { id: toastId, message: "This Product Added to cart!" }]);

    // remove toast after 2s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 2000);
  };

  // Portal for all toasts
  const ToastsPortal = () => {
    if (typeof document === "undefined") return null;
    return createPortal(
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className="cart-alert">
            {t.message}
          </div>
        ))}
      </div>,
      document.body
    );
  };

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
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-price">
          <p className="new-price">$ {product.new_price}</p>
          <p className="old-price">$ {product.old_price}</p>
        </div>

        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <h1 className="select-size">Select size</h1>
        <div className="size-selection">
          {Sizes.map((item) => (
            <button
              key={item}
              onClick={() => setsize(item)}
              className={size === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="add-to-cart" onClick={() => handleAddToCart(product.id)}>
          Add to cart
        </button>

        <div className="product-info">
          <h3>
            Category : <span> {product.category}</span>
          </h3>
          <h3>
            Tags : <span> Modern , latest</span>
          </h3>
        </div>
      </div>

      {/* Toast Portal */}
      <ToastsPortal />
    </div>
  );
}

export default ProductDisplay;
