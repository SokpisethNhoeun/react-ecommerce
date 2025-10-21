import React from 'react'
import './RelatedProduct.css'
import data_product from '../assets/data'
import Item from '../../items/Item'
function RelatedProduct() {
  return (
    <div className='ralatedproducts'>
  <h1>Related Products</h1> <hr />
  <div className="relatedproducts-item">
    {data_product.map((item,i) => {return <Item key={i} {...item} />})} <hr />
    </div>    
    </div>
  )
}

export default RelatedProduct
