import React from 'react'
import './Shop.css'
import Hero from '../hero/Hero'
import Popular from '../popular/Popular'
import Offers from '../offer/Offers'
import NewCollection from '../popular/NewCollection'
import NewLetters from '../newletters/NewLetters'
function Shop() {
  return (
    <div>
      <Hero />
     <Popular />
     <Offers />
     <NewCollection />
     <NewLetters />
    
    </div>
  )
}

export default Shop
