import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
const BreadCrumbs = () => {
    const location = useLocation()

    let currentLocation = ""

    const crumb = location.pathname.split('/')
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
        currentLocation += `/${crumb}`
        return (
          <Link key={crumb} className="hover:text-(--accent-secondary) text-(--accent-secondary)" to={`${currentLocation}`}>{crumb.replaceAll("-"," ")}</Link>
        )
    })
    
  return (
    <>
      {crumb.length > 0 && 
        <div className='h-10 flex justify-start w-[78%] bg-(--bg-page)  items-center pl-10'>
      <nav aria-label="Breadcrumb">
      {crumb.length > 0 && 
        <ol key={crumb} className="flex items-center text-md
        [&>li:not(:last-child)]:after:content-['>']
        [&>li:not(:last-child)]:after:mx-2
        [&>li:not(:last-child)]:after:text-(--accent-secondary)
      ">
        <li key={crumb} >
          <Link to="/" className="hover:text-(--accent-secondary) text-[10px] md:text-[14px]" key={crumb}>Home</Link>
        </li>
        <span className='capitalize text-[10px] md:text-[14px]'>{crumb}</span>
      </ol>
      }
    </nav>
    </div>
      }
    </>
  )
}

export default BreadCrumbs