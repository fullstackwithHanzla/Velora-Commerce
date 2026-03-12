import React, { memo, useState } from 'react'
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const ShopFilter = memo(({productsLength , slicedProducts , handleFilterType , handleGridType ,noColumngrid}) => {
    const [gridIndex,setGridIndex] = useState(0)
    const gridIcons = [
        {icon : CiGrid41},
        {icon : CiGrid2H}
    ]

    const [defaultSortingProducts , setDefaultSortingProducts] = useState("Default Sorting")
    const [isFilterDropDownActive,setIsFilterDropDownActive] = useState(false)

    const sortingDropdown = [
        "Default Sorting",
        "Latest Products",
        "Best Selling"
    ]
    
  return (
    <div className={`flex justify-between  lg:mx-0 items-center shadow-md bg-white rounded-md p-3 ${noColumngrid?"mx-2":"mx-10"}`}>
        <div className='flex items-center gap-3'>
            <div onClick={()=>setIsFilterDropDownActive(!isFilterDropDownActive)} className='border relative border-gray-600/30 text-gray-600 rounded-md px-4 py-2 flex items-center gap-3 md:gap-5 justify-between'>
                <span className='text-[10px] md:text-[12px]'>{defaultSortingProducts}</span>
                <MdKeyboardArrowDown className={`size-3 md:size-4 transition-all duration-300 ease-in-out ${isFilterDropDownActive? "rotate-180":""}`}/>
                <div className={`absolute z-50 w-full left-0 p-2 flex flex-col gap-1 bg-white shadow-md top-10 border border-gray-600/30 rounded-md transition-opacity duration-300 ease-in-out ${isFilterDropDownActive? "opacity-100" : "opacity-0"}`}>
                    {sortingDropdown.map((item , index) => (
                        <div onClick={()=> {
                            setDefaultSortingProducts(item);
                            handleFilterType(item)
                        }} key={index} className={` flex items-center justify-start px-2 py-1.5 rounded-md hover:bg-gray-600/10 ${defaultSortingProducts === item? "bg-gray-600/10":""}`}>
                            <span className={`text-[10px] md:text-[12px] cursor-pointer ${defaultSortingProducts === item? "text-black":""}`}>{item}</span>
                        </div>
                    ) )}
                </div>
            </div>
            <p className='text-[13px] hidden md:block '>Showing {slicedProducts} of {productsLength}</p>
        </div>
        <div className='flex gap-2'>
            {gridIcons.map(({icon} , index ) => {
                const Icon = icon;
                return (
                    <div onClick={()=>{
                        setGridIndex(index);
                        handleGridType(index)
                       
                    }} key={index} className={`border border-gray-600/30 transition-colors duration-200 ease-in-out  p-1 rounded-md hover:bg-(--accent-secondary) hover:text-white
                    ${gridIndex === index ? "bg-(--accent-secondary) text-white" : ""}
                    `}>
                            <Icon className='size-6'/>
                     </div>
                )
            })}
        </div>
    </div>
  )
})

export default ShopFilter