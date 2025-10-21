import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../components/assets/breadcrum_arrow.png";
import { Link } from 'react-router-dom';

function Breadcrum({product}) {
 
  return (
    <div className="breadcrum-container">
        <div className="breadcrum">
          <Link to="/">Home</Link> <img src={arrow_icon} alt="" />
      <Link to="/">Shop</Link> <img src={arrow_icon} alt="" />
      <Link to={`/${product.category}s`}> {product.category}</Link> <img src={arrow_icon} alt="" />
      <span>{product.name}</span>
    </div>
    </div>
  );
}

export default Breadcrum;
