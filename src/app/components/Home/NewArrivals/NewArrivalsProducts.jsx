import React, { memo, useState } from 'react'

import useQuickViewStore from '../../../layouts/providers/useQuickViewStore';
import QuickView from '../QuickView/QuickView';
import { useShallow } from 'zustand/shallow';
import { useToast } from '../../../layouts/providers/ToastProvider';

import ProductCards from './ProductCards';
import useCartStore from '../../../layouts/providers/useCartStore';
import useWishListStore from '../../../layouts/providers/useWishListStore';

const NewArrivalsProducts = memo(({products , start , end , shopDifferentPage = false , noColumngrid =  false}) => {
    const {showToast} = useToast()
    const slides = products;
    const [isWishListHovered , setIsWishListHovered] = useState(false)
    const [isQuickViewHovered , setIsQuickViewHovered] = useState(false)
    const [isWishListActive,setIsWishListActive] = useState(false)
    
    
    const cartId = useCartStore((state) => state.cartId)
    const toggleCartId = useCartStore((state) => state.toggleCartId)
    const wishListId = useWishListStore((state) => state.wishListId)
    const toggleWishList = useWishListStore((state) => state.toggleWishList)

    const {quickViewId , openQuickView , quickViewActive , quickViewActiveStatus} = useQuickViewStore(
        useShallow(state => ({
            quickViewId : state.quickViewId,
            openQuickView : state.showQuickView,
            quickViewActive :  state.quickViewActive,
            quickViewActiveStatus : state.quickViewActiveStatus
        }))
    )

    

    
    function showToastMessage (message ,type ){
        showToast({
            message: message,
            type : type,
        })
    }

    const selectSlides =  start && end ? slides?.slice(start,end) : slides?.slice(0,8)

  return (
    <>
        <div className={`grid   lg:mx-auto grid-cols-1    gap-x-5 ${noColumngrid? "grid-cols-1 gap-y-2 mx-2 my-2 md:my-10":"md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 mx-10 my-20"}`}>
        <ProductCards selectSlides={selectSlides} noColumngrid={noColumngrid} shopDifferentPage={shopDifferentPage} openQuickView={openQuickView} setIsQuickViewHovered={setIsQuickViewHovered} isQuickViewHovered={isQuickViewHovered} showToastMessage={showToastMessage} toggleCartId={toggleCartId} toggleWishList={toggleWishList} isWishListHovered={isWishListHovered} setIsWishListHovered={setIsWishListHovered} isWishListActive={isWishListActive} setIsWishListActive={setIsWishListActive} wishListId={wishListId} cartId={cartId}/>
    </div>
        <QuickView />
    <hr className='text-gray-600/20'/>
    </>
  )
})

export default NewArrivalsProducts





