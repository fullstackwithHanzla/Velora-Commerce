import React, { Activity, memo } from 'react'

const CategoryDropDown = memo(({ categoryDropDown }) => {
    const categoryDropDownArray = [
        "Laptop & PC",
        "Watches",
        "Mobile and Tablets",
        "Sports and Health",
        "Home Appliances",
        "Game and Videos and Televisions"
    ];
    return (
        <Activity mode={categoryDropDown ? "visible":"hidden"} >
            <div className='p-3.5 flex flex-col gap-3'>
                {categoryDropDownArray.map((cate,index) => (
                    <span className='cursor-pointer hover:text-(--accent-secondary)' key={index}>{cate}</span>
                ))}
            </div>
        </Activity>
    )
})

export default CategoryDropDown