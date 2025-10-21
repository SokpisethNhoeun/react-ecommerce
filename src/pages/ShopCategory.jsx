import React, { useContext } from "react";
import "./ShopCategory.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../items/Item";
import "../popular/NewCollection.css";


function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 56 products
        </p>
        <div className="shopcategory-sort">
         
        <p>Sort by </p>  <RiArrowDropDownLine size={30} />
        </div>
      </div>{" "}
      <div className="new-collection-container">
        <div className="new-collection autoshow">
          {all_product.map((item, index) => {
            if (item.category === props.category)
              return <Item key={index} {...item} />;
          })}
        </div>
      </div>
        <button>Explore more </button>
    </div>
  );
}

export default ShopCategory;
