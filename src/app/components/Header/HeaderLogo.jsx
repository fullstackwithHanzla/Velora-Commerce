import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
  return (
      <Link to="/">
        <img src="/src/assets/Velora-Logo.png" alt="" className='cursor-pointer h-12 sm:h-10'/>
      </Link>
  )
}

export default HeaderLogo