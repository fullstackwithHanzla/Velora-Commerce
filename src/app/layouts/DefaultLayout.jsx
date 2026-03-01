import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Header/Sidebar'
import SnackbarCart from '../components/Header/SnackbarCart/SnackbarCart'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'

const DefaultLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <aside>
        <Sidebar/>
      </aside>
      <aside>
        <SnackbarCart/>
      </aside>
        <aside>
          <BreadCrumbs/>
        </aside>
      <main className='grow flex bg-(--bg-page) justify-center'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default DefaultLayout