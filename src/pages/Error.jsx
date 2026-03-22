import React from 'react'
import { Link } from 'react-router-dom'
import { RiHome3Line } from "react-icons/ri";

const Error = () => {
  return (
    <div className='w-[95%] py-20 my-5 bg-white rounded-lg flex items-center justify-center'>
        <div className='flex flex-col gap-4 w-[80%]  items-center text-center'>
            <h1 className='font-bold text-6xl md:text-9xl text-(--accent-secondary) '>404</h1>
            <h3 className='text-[14px] md:text-[18px] font-medium'>Sorry, the page can't be Found</h3>
            <p className='text-[12px] md:text-[14px] font-light text-gray-600'>The page you were looking for appears to have been moved, deleted or does not exist.</p>
            <Link to="/" className='border px-4 md:px-8 py-2.5 bg-(--accent-secondary) text-white rounded-md hover:bg-blue-600 flex gap-2 items-center'>
                    <RiHome3Line className='size-6'/>
                    Back to Home
            </Link>
        </div>
    </div>
  )
}

export default Error