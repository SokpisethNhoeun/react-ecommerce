import React, { createContext } from "react";
import all_product from "../components/assets/all_product";
import { useState } from "react";
import { GiCarDoor } from "react-icons/gi";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  // const totalcart =() => {
  //   let totalamount=0
  //   for (const i in CartItem){
  //     if (CartItem[i] > 0){
  //       let iteminfo = all_product.find((item) => item.id === Number(i))
  //       totalamount += iteminfo
  //     }
  //   }
  // }
  const totalcart = () => {
    let totalitem = 0;
    for (const i in CartItem) {
      if (CartItem[i] > 0) {
        totalitem += CartItem[i];
      }
    }
    return totalitem;
  };
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
  const removefromcart = (itemid) => {
    setCardItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const contextValue = {
    all_product,
    login,
    handleLogin,
    CartItem,
    addtocart,
    removefromcart,
    totalcart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
