import React, { memo, useState } from 'react'
import { newProductsData } from '../../../../features/settings/api'
import { IoEyeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import useQuickViewStore from '../../../layouts/providers/useQuickViewStore';
import QuickView from '../QuickView/QuickView';
import { useShallow } from 'zustand/shallow';
import { useToast } from '../../../layouts/providers/ToastProvider';
import { Link } from 'react-router-dom';

const NewArrivalsProducts = memo(({products , start , end}) => {
    const {showToast} = useToast()
    const slides = products;
    const [isWishListHovered , setIsWishListHovered] = useState(false)
    const [isQuickViewHovered , setIsQuickViewHovered] = useState(false)
    const [isWishListActive,setIsWishListActive] = useState(false)
    const [wishListId,setWishListId] = useState([])
    const [cartId,setCartId] = useState([])

    const {quickViewId , openQuickView , quickViewActive , quickViewActiveStatus} = useQuickViewStore(
        useShallow(state => ({
            quickViewId : state.quickViewId,
            openQuickView : state.showQuickView,
            quickViewActive :  state.quickViewActive,
            quickViewActiveStatus : state.quickViewActiveStatus
        }))
    )

    function toggleWishList(id) {
        setWishListId((prev) => 
        prev.includes(id)?
            prev.filter((item) => item !== id) :
            [...prev , id]
        )
    }

    function toggleCartId(id){
        setCartId((prev) =>
            prev.includes(id)?
            prev.filter((item) => item.id !== id) :
            [...prev , id]
        )
    }
    function showToastMessage (message ,type ){
        showToast({
            message: message,
            type : type,
        })
    }

    const selectSlides =  start && end ? slides?.slice(start,end) : slides?.slice(0,8)

  return (
    <>
        <div className='grid mx-10 my-20  lg:mx-auto grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-5'>
        {selectSlides.map((s) => (
            <div  className=' flex flex-col gap-3  group items-center  max-w-full md:min-w-full' key={s.id}>
                <div className='h-70 relative    overflow-hidden min-w-full md:w-70 flex items-center justify-center border border-gray-600/10 rounded-lg bg-[#F6F7FB]'>
                    <div className={`absolute flex  justify-center items-end  transition-all duration-400  ease-in-out opacity-0 -bottom-20 
                        group-hover:bottom-2
                        group-hover:opacity-100
                        `}>
                        <div className=' flex gap-2'>
                            <button onClick={()=>openQuickView(s.id)} onMouseEnter={()=>setIsQuickViewHovered(!isQuickViewHovered)} onMouseLeave={()=>setIsQuickViewHovered(false)} className='bg-white p-2 relative  hover:text-(--accent-secondary) rounded-md border border-gray-400/30'>
                                <div className={`border border-gray-600/20  absolute bottom-11 text-[13px] -left-6 bg-white transition-all duration-300 ease-in-out  w-22 py-1 rounded-md font-medium ${isQuickViewHovered? "opacity-100" : "opacity-0"}`}>Quick View</div>
                                <IoEyeOutline className='size-5 stroke-1'/>
                            </button>
                            <button onClick={()=>{
                                !cartId.includes(s.id) && s.inStock && showToastMessage("Product Successfully added to Cart" , "success");
                                toggleCartId(s.id)
                            }} className={` rounded-md px-4 text-[12px] text-white
                                ${cartId.includes(s.id) && s.inStock? "bg-(--accent-primary) hover:bg-[#151d39]" : "bg-(--accent-secondary)  hover:bg-blue-700"}
                            `}>
                                {cartId.includes(s.id) && s.inStock ? <Link>Checkout</Link> : `${s.inStock? "Add To Cart":"Out of Stock"}`}
                            </button>
                            <button onClick={()=>{
                                setIsWishListActive(!isWishListActive)
                                toggleWishList(s.id);
                                showToastMessage(!isWishListActive? "Product added in wishlist" : "Product removed from wishlist" , !isWishListActive ? "success" : "info")
                                }
                            } onMouseEnter={() => setIsWishListHovered(!isWishListHovered)} onMouseLeave={()=>setIsWishListHovered(false)} className='bg-white relative p-2 rounded-md border  border-gray-400/30 hover:text-(--accent-secondary)'>
                                <div className={`border border-gray-600/20 absolute bottom-11 text-[13px] w-35 -right-15 bg-white min-w-full transition-all duration-300 ease-in-out  px-2 py-1 rounded-md font-medium ${isWishListHovered? "opacity-100" : "opacity-0"}`}>{isWishListActive? "Added to Wishlist" : "Add to Wishlist"}</div>
                                {wishListId.includes(s.id)? <FaHeart className={`'size-5 stroke-1`}/>: <FaRegHeart className={`'size-5 stroke-1`}/>}
                                
                            </button>
                        </div>
                    </div>
                    <div className={`absolute inset-0 left-auto right-2 top-2  h-6 flex items-center justify-center px-4 rounded-2xl text-white
                        ${s.inStock? "bg-(--accent-secondary)" : "line-through bg-red-600"}
                        `}>
                        <span className='text-[10px] md:text-[12px]'>{s.salesPercentage && s.inStock? s.salesPercentage : null}{s.inStock? "% OFF" : "Out Of Stock"}</span>
                    </div>
                    
                    <img src={s.thumbnail} alt={s.title} className='w-50'/>
                </div>
                <div className='flex flex-col min-w-full  md:w-70 items-start '>
                    <h3 className='text-[12px] sm:text-[14px] hover:text-(--accent-secondary) font-normal '>{s.title}</h3>
                    <div className='flex gap-1 items-center'>
                        <span className='line-through text-gray-600 text-[12px] md:text-[14px] font-medium'>${s.originalPrice}</span>
                        <span className='text-lg md:text-xl font-medium'>${s.price}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
        <QuickView />
    <hr className='text-gray-600/20'/>
    </>
  )
})

export default NewArrivalsProducts