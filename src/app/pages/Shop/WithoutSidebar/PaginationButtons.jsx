import React, { memo, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const PaginationButtons = memo(({totalProducts , pages, setPages}) => {
    const [activePage,setActivePage] = useState(1)
  return (
    <div  className='flex items-center my-10 justify-center  gap-2'>
        <div className='flex gap-2 bg-white p-1 rounded-md shadow-md'>
            <button  onClick={()=>{
            setPages((prev) => Math.max(prev -1 , 1));
            setActivePage((prev) => Math.max(prev -1 , 1))
        }} disabled={pages === 1} className='flex items-center  text-[12px] md:text-[14px] justify-center gap-2 border border-gray-600/30 px-2 py-1 md:px-6 md:py-2 rounded-md hover:bg-gray-600/5 disabled:text-gray-600/30'>
            <GoArrowLeft/>
            Previous
        </button>
        <div className=' flex justify-center items-center gap-1'>
            {Array.from({length : totalProducts}).map((_,pageNumber) => (
                <button key={pageNumber + 1} onClick={() => {
                    setActivePage(pageNumber + 1);
                    setPages(pageNumber + 1)
                }} className={`py-1 md:py-2 w-8 md:w-12 font-light rounded-md hover:bg-(--accent-secondary) hover:text-white  ${activePage === pageNumber + 1 ? "text-white bg-(--accent-secondary)" : "text-black"}`}>{pageNumber + 1}</button>
            ))}
        </div>
        <button onClick={()=> {
            setPages((prev) => Math.min(prev + 1 , totalProducts));
            setActivePage((prev) => Math.min(prev + 1 , totalProducts))
        }} disabled={pages === totalProducts} className='flex items-center text-[12px] md:text-[14px] justify-center gap-2 border border-gray-600/30 px-2 md:px-6 py-2 rounded-md hover:bg-gray-600/5 disabled:text-gray-600/30'>
            Next
            <GoArrowRight/>
        </button>
        </div>
    </div>
  )
})

export default PaginationButtons