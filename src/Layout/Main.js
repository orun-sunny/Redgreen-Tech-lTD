import React from 'react'
import Header from '../pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import Home from '../pages/Home/Home/Home'
import BottomNav from '../pages/Shared/BottomNav/BottomNav'
import Banner from '../pages/Home/Banner/Banner'

function Main() {
  return (
    <div>

        <Header></Header>
        <BottomNav></BottomNav>
        <Home></Home>
        <Banner></Banner>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main