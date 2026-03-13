import React, { Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'

import { Outlet, useNavigation } from 'react-router-dom'
import Sidebar from '../components/Header/Sidebar'
import SnackbarCart from '../components/Header/SnackbarCart/SnackbarCart'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import ScrollToTopButton from '../../shared/ui/ScrollToTopButton'
import Loading from '../../shared/ui/Loading'

const DefaultLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <aside>
        <Sidebar/>
      </aside>
      <aside>
        <SnackbarCart/>
      </aside>
        <aside className='flex justify-center  items-center pt-2 bg-(--bg-page)'>
          <BreadCrumbs/>
        </aside>
      <main className='grow flex items-center flex-col bg-(--bg-page)'>
        {isLoading && <Loading/>}
          <Outlet/>
        <ScrollToTopButton/>
      </main>
      <Footer/>
    </div>
  )
}

export default DefaultLayout