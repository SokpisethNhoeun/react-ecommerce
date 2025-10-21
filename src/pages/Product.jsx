import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum';
import ProductDisplay from '../components/Productdisplay/ProductDisplay';
import Description from '../Description/Description';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';
function Product() {
  const {all_product} = useContext(ShopContext);
  const {productid} = useParams();
  
const product = all_product.find(p => p.id === Number(productid)); 
 return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
      
      
    </div>
  )
}

export default Product
