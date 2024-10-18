import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    {/* wherever we gives outlet at that place things gets changed */}
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout