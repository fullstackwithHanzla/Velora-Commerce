import React from 'react'
import useWishListStore from '../../layouts/providers/useWishListStore'
import { FaCheck } from 'react-icons/fa'
import AddToCartButton from '../../../shared/ui/AddToCartButton'
import OutOfStock from '../../../shared/ui/OutOfStock'
import { RiDeleteBinLine } from 'react-icons/ri'
import { RxCross2 } from "react-icons/rx";


const WishListProducts = () => {
    const wishList = useWishListStore((state) => state.wishList)
    const removeFromWishList = useWishListStore((state) => state.removeFromWishList)
    const toggleWishList = useWishListStore((state) => state.toggleWishList)

    function handleDeleteButton(id) {
        removeFromWishList(id);
        toggleWishList(id)
    }
  return (
    <div className='bg-white shadow-md w-full  rounded-lg flex flex-col'>
        
        <div className=' rounded-md '>
            {wishList.map((item) => (
                <div key={item.id} className='flex flex-col gap-5 items-center lg:flex-row lg:gap-0 p-5 border-b border-gray-600/20 w-full justify-between'>

                    <div className='flex flex-col lg:flex-row gap-5 w-full lg:max-w-[35%] items-center p-2'>
                        <img src={item.thumbnail} alt={item.title} className='w-35 lg:w-25 bg-gray-600/8 p-3 rounded-xl'/>
                        <h3 className='font-light text-[14px] text-center '>{item.title}</h3>
                    </div>

                    <div className='flex flex-col gap-3 md:flex-row items-end md:items-center w-full md:w-[70%] lg:w-130  md:justify-between  '>
                        <h3 className=' font-medium text-[16px]'>${item.price}</h3>

                        <div className='flex items-center gap-2'>
                            <div className={`h-4 w-4  rounded-full  border flex items-center justify-center ${item.inStock? "border-green-600": "border-red-700"}`}>
                                <FaCheck className={`size-2 ${item.inStock? "text-green-500/80" : "text-red-700"}`}/>
                            </div>
                                <p className={` font-light text-[14px] ${item.inStock? "text-green-600" : "text-red-600"}`}>{item.inStock? "In Stock" : "Out of Stock"}</p>
                        </div>
                        

                        <div>
                            {item.inStock? <AddToCartButton qvProd={item}/> : <OutOfStock/>}
                        </div>

                        <div className=' lg:mr-10'>
                            <button onClick={()=>{
                                handleDeleteButton(item.id)
                            }} className='border transition-colors duration-300 ease-in-out p-2 rounded-lg border-gray-600/20 bg-gray-600/5 hover:bg-red-300/30 hover:border-red-600/10 hover:text-red-700'>
                                <RiDeleteBinLine className='size-5 '/>
                            </button>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default WishListProducts