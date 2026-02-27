import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Header/Sidebar'

const DefaultLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <aside>
        <Sidebar/>
      </aside>
      <main className='grow flex bg-(--bg-page) justify-center'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default DefaultLayout