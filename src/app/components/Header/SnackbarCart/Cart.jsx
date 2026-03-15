import React, { memo } from 'react'
import EmptyCart from './EmptyCart'
import useCartStore from '../../../layouts/providers/useCartStore'
import { useShallow } from 'zustand/shallow'
import { Link } from 'react-router-dom'
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
    const {cart ,removeItem} = useCartStore(
        useShallow((state) => ({
            cart : state.cart,
            removeItem : state.removeItem
        }))
    )
    function handleDeleteButton(id,e){
        removeItem(id);
        e.preventDefault()
    }
  return (
    <>
        {cart.length > 0 ? 
        <div className='  flex  h-181 flex-col py-5 gap-3 overflow-y-scroll'>
            {cart?.map((item) => (
                <Link to={`/shop/${item.slug}`} key={item.id}
                className='flex justify-between items-center gap-10 px-5'>
                    <div className='flex justify-start items-center gap-5'>
                        <img src={item.thumbnail} alt={item.title} className='w-25 bg-gray-600/15 p-5 rounded-2xl'/>
                    <div className='flex flex-col '>
                        <span className='font-normal text-[14px] transition-colors duration-300 ease-in hover:text-(--accent-secondary)'>{item.title}({item.quantity})</span>
                        <span className='font-medium text-gray-600 text-[12px]'>Price: ${item.price}</span>
                    </div>
                    
                    </div>
                    <button type='button' onClick={(e)=>{
                        handleDeleteButton(item.id,e)
                    }} className='border transition-colors duration-300 ease-in-out p-2 rounded-lg border-gray-600/20 bg-gray-600/5 hover:bg-red-300/30 hover:border-red-600/10 hover:text-red-700'>
                        <RiDeleteBinLine className='size-5 '/>
                    </button>
                </Link>
            ))}
        </div> 
        : <EmptyCart/>}
    </>
  )
}

export default memo(Cart)