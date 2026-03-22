import React, { Activity, memo, useEffect } from 'react'
import useProductFilterization from '../../products/store/useProductFilterization';

const CategoryDropDown = memo(({ categoryDropDown }) => {
    const categoryDropDownArray = [
        "Laptop & PC",
        "Watches",
        "Mobile and Tablets",
        "Sports and Health",
        "Home Appliances",
        "Game and Videos and Televisions"
    ];

    const setCategoryFilter = useProductFilterization((state) => state.setCategoryFilter)
    const categoryFilter = useProductFilterization((state) => state.categoryFilter)

    
    

    return (
        <Activity mode={categoryDropDown ? "visible":"hidden"} >
            <div className='p-3.5 flex flex-col gap-3'>
                {categoryDropDownArray.map((cate,index) => (
                    <span onClick={() => setCategoryFilter(cate)} className={`cursor-pointer hover:text-(--accent-secondary) ${categoryFilter.includes(cate)? "text-(--accent-secondary)":""}`} key={index}>{cate}</span>
                ))}
            </div>
        </Activity>
    )
})

export default CategoryDropDown