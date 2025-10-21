import React, { useContext } from "react";
import "./Cartitem.css";
import { ShopContext } from "../context/ShopContext";
import remove_icon from '../components/assets/cart_cross_icon.png'
function Cartitem() {
  const { removefromcart, CartItem, all_product } = useContext(ShopContext);
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
            <div className="card-item-container">
              <img className="product-image" src={item.image} alt="" />
              <p className="item-cart">{item.name}</p>
              <p className="item-cart">{item.new_price}</p>
              <p className="item-cart" style={{border:"1px solid black" , padding:"10px 8px"}}>{CartItem[item.id]}</p>
              <p className="item-cart">{item.new_price*CartItem[item.id]}</p>
              <img className="remove-icon" src={remove_icon} alt="" onClick={()=> removefromcart(item.id)} />
              
            </div>
            
          );
        }
      })}
    </div>
  );
}

export default Cartitem;
