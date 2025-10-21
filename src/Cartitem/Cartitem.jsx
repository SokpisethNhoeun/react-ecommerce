import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import "./Cartitem.css";
import { ShopContext } from "../context/ShopContext";
import remove_icon from '../components/assets/cart_cross_icon.png';

function Cartitem() {
  const { removefromcart, CartItem, all_product } = useContext(ShopContext);

  // toast queue state
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const toastId = Date.now();
    setToasts((prev) => [...prev, { id: toastId, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 2000);
  };

  const handleRemove = (id, name) => {
    if (removefromcart) removefromcart(id);
    showToast(`❌ Removed ${name}`);
  };

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
    <div className="Card-container">
      <div className="card-item-container">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item) => {
        if (CartItem[item.id] > 0) {
          return (
            <div key={item.id} className="card-item-container">
              <img className="product-image" src={item.image} alt="" />
              <p className="item-cart">{item.name}</p>
              <p className="item-cart">{item.new_price}</p>
              <p className="item-cart" style={{ border: "1px solid black", padding: "10px 8px" }}>
                {CartItem[item.id]}
              </p>
              <p className="item-cart">{item.new_price * CartItem[item.id]}</p>
              <img
                className="remove-icon"
                src={remove_icon}
                alt=""
                onClick={() => handleRemove(item.id, item.name)}
              />
            </div>
          );
        }
      })}

      {/* Toast Portal */}
      <ToastsPortal />
    </div>
  );
}

export default Cartitem;
