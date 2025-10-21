import React , {createContext} from "react";
import all_product from '../components/assets/all_product'
import { useState } from "react";

export const ShopContext = createContext(null)
const ShopContextProvider =  (props) => {
    const [login , setlogin]=useState(false);
    const handleLogin =() => {
      setlogin(!login);
    }
    
    const contextValue = {all_product,login,handleLogin};

    return (

        <ShopContext.Provider value={contextValue}>


            {props.children}
        </ShopContext.Provider>
    )


}
export default ShopContextProvider