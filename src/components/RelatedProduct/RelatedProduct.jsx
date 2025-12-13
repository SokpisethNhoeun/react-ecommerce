import React from 'react'
import './RelatedProduct.css'
import data_product from '../assets/data'
import Item from '../../items/Item'

function RelatedProduct() {
  return (
    <section className="relatedproducts">
      <h1>Related Products</h1>
      <hr />

      <div className="relatedproducts-grid">
        {data_product.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProduct
