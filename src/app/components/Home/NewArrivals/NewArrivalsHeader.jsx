import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NewArrivalsHeader = () => {
  return (
    <>
        <div className="w-[90%] mx-auto my-10 flex justify-between items-center">
        <h1 className="text-md md:text-2xl font-medium">New Arrivals</h1>
        <div className="flex gap-1">
          <Link className='border border-gray-600/30 px-6 py-2 hover:bg-(--accent-primary) hover:text-white rounded-lg' to="/shop">
            View All
          </Link>
        </div>
      </div>
    </>
  )
}

export default NewArrivalsHeader