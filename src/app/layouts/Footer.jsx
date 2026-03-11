import React from 'react'
import FooterLinks from '../components/Footer/FooterLinks'

import FooterBanner from '../components/Footer/FooterBanner'


const Footer = () => {
  return (
    <div className='border-t border-t-black/20 flex flex-col  justify-between gap-5'>
      <FooterLinks/>
      
      <FooterBanner/>
    </div>
  )
}

export default Footer