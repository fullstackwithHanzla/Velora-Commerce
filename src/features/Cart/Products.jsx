import React from 'react'
import useCartStore from '../../app/layouts/providers/useCartStore'
import { FaCheck } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import QuickViewQuantity from '../../app/components/Home/QuickView/QuickViewQuantity'
import useQuickViewStore from '../../app/layouts/providers/useQuickViewStore'
import { useShallow } from 'zustand/shallow'

const Products = () => {
    const cart = useCartStore((state) => state.cart)

    const {quantity,setQuantity} = useQuickViewStore(
        useShallow((state) => ({
            quantity: state.quantity,
            setQuantity: state.setQuantity,
        }))
    )
    

  return (
      <div className='bg-white shadow-md w-full  rounded-lg flex flex-col'>

          <div className=' rounded-md '>
              {cart.map((item) => (
                  <div key={item.id} className='flex flex-col gap-5 items-center lg:flex-row lg:gap-0 p-5 border-b border-gray-600/20 w-full justify-between'>

                      <div className='flex flex-col lg:flex-row gap-5 w-full lg:max-w-[35%] items-center p-2'>
                          <img src={item.thumbnail} alt={item.title} className='w-35 lg:w-25 bg-gray-600/8 p-3 rounded-xl' />
                          <h3 className='font-light text-[14px] text-center '>{item.title}</h3>
                      </div>

                      <div className='flex flex-col gap-3 md:flex-row  items-end md:items-center w-full md:w-[70%] lg:w-130  md:justify-between  '>
                          <div className='flex flex-col items-center justify-center gap-1'>
                              <h3 className=' font-medium text-gray-600 text-[16px]'>Price</h3>
                              <h3 className=' font-light text-[16px]'>${item.price}</h3>
                          </div>
                            <div>
                              <QuickViewQuantity qvProd={item} quantity={quantity} setQuantity={setQuantity}/>
                            </div>
                          <div className='flex flex-col items-center justify-center gap-1'>
                              <h3 className=' font-medium text-gray-600 text-[16px]'>SubTotal</h3>
                              <h3 className=' font-light text-[16px]'>${item.price * item.quantity}</h3>
                          </div>
                          

                          <div className=' lg:mr-10'>
                              <button onClick={() => {
                                  handleDeleteButton(item.id)
                              }} className='border transition-colors duration-300 ease-in-out p-2 rounded-lg border-gray-600/20 bg-gray-600/5 hover:bg-red-300/30 hover:border-red-600/10 hover:text-red-700'>
                                  <RiDeleteBinLine className='size-5 ' />
                              </button>
                          </div>

                      </div>

                  </div>
              ))}
          </div>
      </div>
  )
}

export default Products