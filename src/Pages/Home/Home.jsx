/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Team from '../../Components/Team/Team'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Features from '../../Components/Features/Features'
import ProductGrid from '../../Components/ProductGrid/ProductGrid'
import InfoBar from '../../Components/InfoBar/InfoBar'

const Home = () => {
  return (
    <div> 
       <Banner/>
       <About/>
       <Services/>
       <ProductGrid/>
       <Features/>
       <Team/>
       <Testimonials/>
       <InfoBar/>
    </div>
  )
}

export default Home
