import React from 'react'
import useCartStore from '../../../layouts/providers/useCartStore';
import { useShallow } from 'zustand/shallow';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import EmptyCart from './EmptyCart';

const SnackbarCart = () => {
    const { isCartOpen, checkCartStatus } = useCartStore(
        useShallow((state) => ({
          isCartOpen: state.isCartOpen,
          checkCartStatus: state.checkCartStatus,
        }))
      );
      
  return (
    <div className="fixed  inset-0 z-20 pointer-events-none">
      {/* Overlay */}
      <div
        onClick={checkCartStatus}
        className={`
          absolute inset-0
          bg-black/40
          transition-opacity duration-300 ease-in-out
          ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}
        `}
      />

      {/* Sidebar */}
      <div
        className={`
          absolute right-0 top-0
          h-full flex flex-col  w-full  sm:w-100 md:110
          bg-(--bg-card)
          transition-transform duration-500 ease-in-out
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
          pointer-events-auto
        `}
      >
        <div className=" flex flex-col min-h-full justify-between">
          <div>
            <div className=" h-20 flex items-center justify-between px-6">

            <h1 className='text-[16px] underline hover:text-(--accent-secondary) sm:text-2xl'>Cart View</h1>

          <button
            onClick={checkCartStatus}
            className="p-3 text-2xl  hover:text-(--accent-secondary)"
            aria-label="Close sidebar"
          >
            <RxCross2 />
          </button>

        </div>
        <hr className="text-black/30"/>
        <EmptyCart/>
        </div>
        
        <div className="border-t border-t-black/30 h-35 flex flex-col justify-center items-center gap-7 px-5">
          <div className='flex justify-between items-center w-[97%]'>
            <p className='text-gray-500/90 text-md underline'>Subtotal : </p>
            <span className='text-xl'>0</span>
          </div>
          <div className='flex justify-evenly items-center w-full gap-3'>
            <Link className='bg-(--accent-secondary) text-white py-3 grow flex justify-center text-[12px] sm:text-[14px] rounded-md' to="/cart">
              View Cart
            </Link>
            <Link className='bg-(--accent-primary) text-white py-3  grow flex justify-center text-[12px] sm:text-[14px] rounded-md' to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SnackbarCart