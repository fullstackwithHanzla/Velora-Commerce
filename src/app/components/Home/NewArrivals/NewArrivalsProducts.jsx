import React, { useState } from 'react'
import { newProductsData } from '../../../../features/settings/api'
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const NewArrivalsProducts = () => {
    const slides = newProductsData;
    const [isWishListHovered , setIsWishListHovered] = useState(false)
    const [isWishListActive,setIsWishListActive] = useState(false)
    const [wishListId,setWishListId] = useState([])

    function toggleWishList(id) {
        setWishListId((prev) => 
        prev.includes(id)?
            prev.filter((item) => item !== id) :
            [...prev , id]
        )
    }

  return (
    <div className='grid  mx-auto grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-5'>
        {slides.slice(0,8).map((s) => (
            <div  className=' flex flex-col gap-5 p-5 group items-center  min-w-screen md:min-w-full' key={s.id}>
                <div className='h-70 relative   overflow-hidden  w-full md:w-70 flex items-center justify-center rounded-lg bg-[#F6F7FB]'>
                    <div className={`absolute flex  justify-center items-end  transition-all duration-400  ease-in-out opacity-0 -bottom-20 
                        group-hover:bottom-2
                        group-hover:opacity-100
                        `}>
                        <div className=' flex gap-2'>
                            <button className='bg-white p-2  hover:text-(--accent-secondary) rounded-md border border-gray-400/30'>
                                <IoEyeOutline className='size-5 stroke-1'/>
                            </button>
                            <button className='bg-(--accent-secondary) rounded-md px-4 text-[12px] text-white hover:bg-blue-700'>
                                Add To Cart
                            </button>
                            <button onClick={()=>{
                                setIsWishListActive(!isWishListActive)
                                toggleWishList(s.id)
                                }
                            } onMouseEnter={() => setIsWishListHovered(!isWishListHovered)} onMouseLeave={()=>setIsWishListHovered(false)} className='bg-white relative p-2 rounded-md border border-gray-400/30 hover:text-(--accent-secondary)'>
                                <div className={`border border-gray-600/20 absolute bottom-11 text-[13px] -right-7 bg-white transition-all duration-300 ease-in-out  px-4 py-1 rounded-md font-medium ${isWishListHovered? "opacity-100" : "opacity-0"}`}>Wishlist</div>
                                {wishListId.includes(s.id)? <FaHeart className={`'size-5 stroke-1`}/>: <FaRegHeart className={`'size-5 stroke-1`}/>}
                                
                            </button>
                        </div>
                    </div>
                    <div className='absolute inset-0 left-auto right-2 top-2 bg-(--accent-secondary) h-6 flex items-center justify-center px-4 rounded-2xl text-white'>
                        <span className='text-[10px] md:text-[12px]'>{s.salesPercentage ? s.salesPercentage : null}% OFF</span>
                    </div>
                    
                    <img src={s.thumbnail} alt={s.title} className='w-50'/>
                </div>
                <div className='flex flex-col w-full md:w-70 items-center md:items-start gap-2'>
                    <h3 className='text-[14px] md:text-[16px] hover:text-(--accent-secondary) font-medium'>{s.title}</h3>
                    <div className='flex gap-1 items-center'>
                        <span className='line-through text-gray-600 text-[12px] md:text-[14px] font-medium'>${s.price}</span>
                        <span className='text-lg md:text-xl font-medium'>${s.originalPrice}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NewArrivalsProducts