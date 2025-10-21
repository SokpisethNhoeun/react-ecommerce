import React from 'react'
import './Popular.css'
import data from '../components/assets/data'
import Item from '../items/Item'
function Popular() {
  return (
    <div>
        <div className="popular-container1 autoshow">
          <h1> Popurlar Collection Women <hr /></h1>
        </div>
      <div className="popular-container autoshow"> {data.map((item,index) => {
        return <Item key={index} {...item} />


      }
    )}</div>
     
    </div>
  )
}

export default Popular
