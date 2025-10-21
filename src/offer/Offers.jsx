import React from 'react'
import './Offers.css'
import exclusive_image from '../components/assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
      <div className="offers-content autoshow">
        <div className="offers-content-left">
            <h2>Exclusive</h2>
            <h2>Offers for you</h2>
            <p>Only on best seller products</p>
            <div className="offers-btn">
                Check now
            </div>
        </div>
        <div className="offers-content-right">
            <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Offers
