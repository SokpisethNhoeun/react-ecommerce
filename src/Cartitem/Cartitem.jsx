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

  // Calculate cart total
  const getCartTotal = () => {
    return all_product.reduce((total, item) => {
      if (CartItem[item.id] > 0) {
        return total + (item.new_price * CartItem[item.id]);
      }
      return total;
    }, 0);
  };

  return (
    <div className="Card-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      
      {Object.keys(CartItem).filter(id => CartItem[id] > 0).length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping-btn">Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-header-container">
            <div className="cart-header">
              <p className="header-product">Product</p>
              <p className="header-title">Title</p>
              <p className="header-price">Price</p>
              <p className="header-quantity">Quantity</p>
              <p className="header-total">Total</p>
              <p className="header-remove">Remove</p>
            </div>
          </div>
          <hr className="header-divider" />

          <div className="cart-items-list">
            {all_product.map((item) => {
              if (CartItem[item.id] > 0) {
                return (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-mobile-header">
                      <img className="product-image" src={item.image} alt={item.name} />
                      <div className="mobile-item-info">
                        <p className="item-name">{item.name}</p>
                        <div className="mobile-price-quantity">
                          <span>${item.new_price} × {CartItem[item.id]}</span>
                          <span className="mobile-total">${item.new_price * CartItem[item.id]}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="cart-item-details">
                      <img className="product-image desktop-only" src={item.image} alt={item.name} />
                      <p className="item-title desktop-only">{item.name}</p>
                      <p className="item-price desktop-only">${item.new_price}</p>
                      <p className="item-quantity">
                        <span className="quantity-box">{CartItem[item.id]}</span>
                      </p>
                      <p className="item-total desktop-only">${item.new_price * CartItem[item.id]}</p>
                      <button 
                        className="remove-btn"
                        onClick={() => handleRemove(item.id, item.name)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <img src={remove_icon} alt="Remove" />
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-summary">
            <div className="summary-details">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>$5.00</span>
              </div>
              <div className="total-row grand-total">
                <span>Total:</span>
                <span>${getCartTotal() + 5}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}

      {/* Toast Portal */}
      <ToastsPortal />
    </div>
  );
}

export default Cartitem;