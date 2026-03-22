import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
  return (
      <Link to="/">
        <img src="/assets/Velora-Logo.png" alt="" className='cursor-pointer h-8 sm:h-10 md:h-12'/>
      </Link>
  )
}

export default HeaderLogo