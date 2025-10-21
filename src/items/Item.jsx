import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

function Item(props) {
 const {id,image,name,new_price,old_price} = props;
  return (
    <>
  <Link to={`/product/${id}`}> <div onClick={() => window.scrollTo(0, 0)} className='item'>
     <img src={image} alt="" />
      <p className='name-product'>{name}</p>
      <div className="price">
        <p className='new-price'>$ {new_price}</p>
        <p className='old-price'>$ {old_price}</p>
      </div>
    </div>
    </Link>   
    </>
    
  )
}

export default Item
