import React from 'react'
import useCartStore from '../store/useCartStore';
import { useShallow } from 'zustand/shallow';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import Cart from './Cart';

const SnackbarCart = () => {
    const { isCartOpen, checkCartStatus } = useCartStore(
        useShallow((state) => ({
          isCartOpen: state.isCartOpen,
          checkCartStatus: state.checkCartStatus,
        }))
      );

      const getTotalPrice = useCartStore((state) => state.getTotalPrice)

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

      {/* Sidebar: viewport height + column flex so the list scrolls and footer stays visible */}
      <div
        className={`
          absolute right-0 top-0 flex h-dvh max-h-dvh w-full flex-col sm:w-100 md:w-120
          bg-(--bg-card) shadow-lg
          transition-transform duration-500 ease-in-out
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
          pointer-events-auto
        `}
      >
        <header className="flex h-20 shrink-0 items-center justify-between border-b border-black/10 px-6">
          <h1 className="text-[16px] underline hover:text-(--accent-secondary) sm:text-2xl">
            Cart View
          </h1>
          <button
            type="button"
            onClick={checkCartStatus}
            className="p-3 text-2xl hover:text-(--accent-secondary)"
            aria-label="Close sidebar"
          >
            <RxCross2 />
          </button>
        </header>

        <div className="cart-drawer-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-0 py-3">
          <Cart />
        </div>

        <footer className="flex shrink-0 flex-col gap-5 border-t border-black/10 px-5 py-5">
          <div className="flex w-full items-center justify-between">
            <p className="text-md text-gray-500/90 underline">Subtotal : </p>
            <span className="text-xl">
              $
              {getTotalPrice()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex w-full gap-3">
            <Link
              className="bg-(--accent-secondary) flex grow justify-center rounded-md py-3 text-[12px] text-white sm:text-[14px]"
              to="/cart"
              onClick={checkCartStatus}
            >
              View Cart
            </Link>
            <Link
              className="bg-(--accent-primary) flex grow justify-center rounded-md py-3 text-[12px] text-white sm:text-[14px]"
              to="/checkout"
              onClick={checkCartStatus}
            >
              Checkout
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default SnackbarCart