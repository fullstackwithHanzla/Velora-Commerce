import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import useQuickViewStore from '../../../layouts/providers/useQuickViewStore'
import { useShallow } from 'zustand/shallow'
import { newProductsData } from '../../../../features/settings/api'
import ProductImgType from './ProductImgType'
import { IoIosClose } from "react-icons/io";
import { FaCheck, FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import QuickViewQuantity from './QuickViewQuantity'
import AddToCartButton from '../../../../shared/ui/AddToCartButton'
import AddToWishListButton from '../../../../shared/ui/AddToWishListButton'
import QuickViewStars from './QuickViewStars'
import QuickProductThumbnail from './QuickProductThumbnail'
import OutOfStock from '../../../../shared/ui/OutOfStock'

const QuickView = memo(() => {
    const {quickViewId ,quickViewActive ,quickViewActiveStatus, closeQuickView , quantity , setQuantity} = useQuickViewStore(
        useShallow(state => ({
            quickViewId : state.quickViewId,
            quickViewActive :  state.quickViewActive,
            quickViewActiveStatus : state.quickViewActiveStatus,
            closeQuickView : state.closeQuickView,
            quantity : state.quantity,
            setQuantity : state.setQuantity,
        }))
    )
    // qvProd === quickView Product
    const qvProd = useMemo(() => {
        return newProductsData?.find((item) => item.id === quickViewId)
    }, [quickViewId])
    
    useEffect(() => {
  setQuantity(1)
}, [quickViewId])
    
    
    const [defaultImgUrl,setDefaultImgUrl] = useState(null)
    useEffect(()=>{
        if(qvProd?.images.length){
            setDefaultImgUrl({url : qvProd.images[0]})
        }
    },[qvProd?.id])

    const stopProp = useCallback((e)=>e.stopPropagation(),[])
  return (
    <>
        {qvProd && <div onClick={()=>{
            closeQuickView();
            setDefaultImgUrl({url : null})
        }} className={`fixed z-55 top-0  bg-black/40 inset-0 w-full flex justify-center items-center ${quickViewId === null? "hidden" : "block"}`}>
        <div onClick={stopProp} className='absolute z-56 shadow-lg w-full p-2 md:p-4 md:w-[95%] lg:w-[80%] xl:w-[65%] flex flex-wrap-reverse md:flex-nowrap  gap-3 rounded-2xl bg-white'>
            <div className='flex justify-center md:justify-start w-full gap-3'>
                {/* Product image types */}
            <ProductImgType qvProd={qvProd} setDefaultImgUrl={setDefaultImgUrl}/>
            {/* Product thumbnail */}
            <QuickProductThumbnail defaultImgUrl={defaultImgUrl} qvProd={qvProd}/>
            </div>
            {/* Product minimum details */}
            <div className=' w-full flex flex-col'>
                {/* Close button */}
                <div className=' flex justify-end items-center'>
                    <button onClick={closeQuickView}>
                        <IoIosClose className='size-9  transition-colors duration-150 ease-in-out text-gray-500 hover:text-black'/>
                    </button>
                </div>

                {/* Product information */}
                <div className=' flex flex-col p-4 gap-4'>
                    <div className=' flex'>
                        <p className={`${qvProd.inStock? " bg-green-600/90": "bg-red-600/90 line-through"} rounded-xl px-4 py-0.5 text-[10px] md:text-[12px] font-medium text-white `}>Sale {qvProd.salesPercentage}% OFF</p>
                    </div>
                    <div>
                        <h2 className='text-lg md:text-xl font-semibold underline'>{qvProd.title}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className=' flex'>
                            <div className='flex'>
                                <QuickViewStars rating={qvProd.rating}/>
                            </div>
                            <h3 className='text-[10px] text-gray-600 md:text-[12px]'>({qvProd.reviewCount} Reviews)</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className={`h-4 w-4  rounded-full  border flex items-center justify-center ${qvProd.inStock? "border-green-600": "border-red-700"}`}>
                                <FaCheck className={`size-2 ${qvProd.inStock? "text-green-500/80" : "text-red-700"}`}/>
                            </div>
                        <p className='text-[10px] text-gray-600 md:text-[12px]'>{qvProd.inStock? "In Stock" : "Out of Stock"}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[10px] text-gray-600 md:text-[12px]'>{qvProd.description}</p>
                    </div>
                    {/* Price and Quantity */}
                    <div className='flex justify-between  items-center'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-gray-600 text-[12px] md:text-[14px]'>Price</h3>
                            <div className='flex gap-1 items-center'>
                                <span className='line-through font-medium text-gray-600 text-[12px] md:text-[16px]'>${qvProd.originalPrice}</span>
                                <span className='text-[16px] md:text-[20px] font-medium'>${qvProd.price}</span>
                            </div>
                        </div>
                        <QuickViewQuantity quantity={quantity} setQuantity={setQuantity}  qvProd={qvProd}/>
                    </div>
                        <div className='flex items-center gap-1 '>
                            {qvProd.inStock ? <AddToCartButton quantity={quantity}  qvProd={qvProd}/> : <OutOfStock/>}
                            <AddToWishListButton qvProd={qvProd}/>
                        </div>
                </div>
            </div>
        </div>
    </div>}
    </>
  )
})

export default QuickView