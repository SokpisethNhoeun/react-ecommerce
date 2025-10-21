import React, { createContext } from "react";
import all_product from "../components/assets/all_product";
import { useState } from "react";
import { GiCarDoor } from "react-icons/gi";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const getDefaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;

};

  const [login, setlogin] = useState(false);
  const handleLogin = () => {
    setlogin(!login);
  };
  const [CartItem, setCardItem] = useState(getDefaultcart());
  const addtocart = (itemid) => {
    setCardItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    
   
    
   
  };
  const removefromcard = (itemid) => {
    setCardItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
   
    
   
  };
  const contextValue = {
    all_product,
    login,
    handleLogin,
    CartItem,
    addtocart,
    removefromcard,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
