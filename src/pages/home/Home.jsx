import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Product from './Product'
import Collections from './Collections'
import BestSeller from './BestSeller'

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Product />
      <Collections />
      <BestSeller />
      
    </div>
  )
}

export default Home