import React, { memo, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const PaginationButtons = memo(({totalProducts , pages, setPages}) => {
    const [activePage,setActivePage] = useState(1)
  return (
    <div  className='flex items-center my-10 justify-center gap-2'>
        <button  onClick={()=>{
            setPages((prev) => Math.max(prev -1 , 1));
            setActivePage((prev) => Math.max(prev -1 , 1))
        }} disabled={pages === 1} className='flex items-center justify-center gap-2 border border-gray-600/30 px-4 md:px-6 py-2 rounded-md hover:bg-gray-600/5 disabled:text-gray-600/30'>
            <GoArrowLeft/>
            Previous
        </button>
        <div className=' flex justify-center items-center gap-1'>
            {Array.from({length : totalProducts}).map((_,pageNumber) => (
                <button key={pageNumber + 1} onClick={() => {
                    setActivePage(pageNumber + 1);
                    setPages(pageNumber + 1)
                }} className={`py-2 px-5  rounded-md ${activePage === pageNumber + 1 ? "text-white bg-(--accent-secondary)" : "text-black"}`}>{pageNumber + 1}</button>
            ))}
        </div>
        <button onClick={()=> {
            setPages((prev) => Math.min(prev + 1 , totalProducts));
            setActivePage((prev) => Math.min(prev + 1 , totalProducts))
        }} disabled={pages === totalProducts} className='flex items-center justify-center gap-2 border border-gray-600/30 px-4 md:px-6 py-2 rounded-md hover:bg-gray-600/5 disabled:text-gray-600/30'>
            <GoArrowRight/>
            Next
        </button>
    </div>
  )
})

export default PaginationButtons