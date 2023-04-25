import React from 'react'
import Collection from '../../componets/collections/Collection'
import Foooter from '../../componets/footer/Foooter'
import Header from '../../componets/header/Header'
import NavBar from '../../componets/nav-bar/NavBar'
import SpecialProducts from '../../componets/specialProducts/SpecialProducts'
import './main.css'

function HomePage() {
  return (
    <>
    
    <NavBar />
    <Header />
    <Collection />
    <SpecialProducts />
    <Foooter />


    </>
  )
}

export default HomePage