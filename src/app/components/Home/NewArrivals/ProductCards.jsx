import { IoEyeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useCartStore from '../../../layouts/providers/useCartStore';
import { useShallow } from 'zustand/shallow';
import useWishListStore from '../../../layouts/providers/useWishListStore';

const ProductCards = ({ selectSlides, noColumngrid, shopDifferentPage, openQuickView, setIsQuickViewHovered, isQuickViewHovered, showToastMessage, toggleWishList, isWishListHovered, setIsWishListHovered, isWishListActive, setIsWishListActive, wishListId }) => {

    const { addItem, isInCart } = useCartStore(
        useShallow((state) => ({
            addItem: state.addItem,
            isInCart: state.isInCart,
        }))
    )

    const { wishList, addToWishList, removeFromWishList } = useWishListStore(
        useShallow((state) => ({
            wishList: state.wishList,
            addToWishList: state.addToWishList,
            removeFromWishList: state.removeFromWishList
        }))
    )

    return (
        <>
            {selectSlides?.map((s) => {
                const inCart = isInCart(s.id);
                const isAvailable = s.inStock;
                const isInWishlist = wishListId?.includes(s.id)
                return (
                    (
                        <div className={` flex flex-col gap-3  group items-center   ${noColumngrid ? "flex-row bg-white rounded-md gap-5 md:gap-20" : "max-w-full md:min-w-full"}`} key={s.id}>
                            <div className={` relative    overflow-hidden   flex items-center justify-center border border-gray-600/10  ${shopDifferentPage ? "bg-white" : "bg-[#F6F7FB]"} ${noColumngrid ? "min-w-[30%] p-5 md:p-10" : "min-w-full justify-center h-70 md:w-70  rounded-lg"}`}>
                                <div className={`absolute flex   justify-center items-end  transition-all duration-400  ease-in-out opacity-0 -bottom-20 
                        group-hover:bottom-2
                        group-hover:opacity-100
                        `}>
                                    <div className=' flex gap-2'>
                                        <button onClick={() => openQuickView(s.id)} onMouseEnter={() => setIsQuickViewHovered(!isQuickViewHovered)} onMouseLeave={() => setIsQuickViewHovered(false)} className='bg-white p-2 relative  hover:text-(--accent-secondary) rounded-md border border-gray-400/30'>
                                            <div className={`border border-gray-600/20  absolute  ${noColumngrid ? "text-[8px] md:text-[10px] w-15 md:w-17 md:-left-4 bottom-9 -left-3 " : "text-[13px] -left-6 w-22 bottom-11"}  bg-white transition-all duration-300 ease-in-out  py-1 rounded-md font-medium ${isQuickViewHovered ? "opacity-100" : "opacity-0"}`}>Quick View</div>
                                            <IoEyeOutline className={`${noColumngrid ? "size-3 md:size-4 " : "size-5 stroke-1"}`} />
                                        </button>

                                        <button
                                            onClick={() => {
                                                if (!inCart && isAvailable) {
                                                    addItem(s)
                                                    showToastMessage("Product Successfully added to Cart", "success")
                                                }
                                            }}
                                            className={`rounded-md 
                                        ${noColumngrid ? "px-2 text-[8px] md:px-3 md:text-[10px]" : "px-4 text-[12px]"} 
                                        text-white
                                        ${inCart && isAvailable
                                                    ? "bg-(--accent-primary) hover:bg-[#151d39]"
                                                    : "bg-(--accent-secondary) hover:bg-blue-700"}
                                    `}
                                        >
                                            {inCart
                                                ? <Link to="/checkout">Checkout</Link>
                                                : (isAvailable ? "Add To Cart" : "Out of Stock")
                                            }
                                        </button>

                                        <button onClick={() => {
                                            setIsWishListActive(!isWishListActive)
                                            toggleWishList(s.id)

                                            if (!isInWishlist) {
                                                addToWishList(s)
                                                showToastMessage("Product added in wishlist", "success")
                                            } else {
                                                removeFromWishList(s.id)
                                                showToastMessage("Product removed from wishlist", "error")
                                            }

                                        }} onMouseEnter={() => setIsWishListHovered(!isWishListHovered)} onMouseLeave={() => setIsWishListHovered(false)} className='bg-white relative p-2 rounded-md border  border-gray-400/30 hover:text-(--accent-secondary)'>
                                            <div className={`border border-gray-600/20 absolute ${noColumngrid ? "bottom-9 text-[8px] md:text-[10px] w-20 md:w-28 -right-7 md:-right-8" : "bottom-11 text-[13px] w-35 -right-8"} bg-white min-w-full transition-all duration-300 ease-in-out  px-2 py-1 rounded-md font-medium ${isWishListHovered ? "opacity-100" : "opacity-0"}`}>{isWishListActive ? "Added to Wishlist" : "Add to Wishlist"}</div>
                                            {wishListId.includes(s.id) ? <FaHeart className={`${noColumngrid ? "size-3 md:size-4 " : "size-5 stroke-1"}`} /> : <FaRegHeart className={`${noColumngrid ? "size-3 md:size-4 " : "size-5 stroke-1"}`} />}

                                        </button>
                                    </div>
                                </div>
                                <div className={`absolute inset-0 left-auto right-2 top-2  h-6 flex items-center justify-center px-4 rounded-2xl text-white
                        ${s.inStock ? "bg-(--accent-secondary)" : "line-through bg-red-600"}
                        `}>
                                    <span className='text-[10px] md:text-[12px]'>{s.salesPercentage && s.inStock ? s.salesPercentage : null}{s.inStock ? "% OFF" : "Out Of Stock"}</span>
                                </div>

                                <Link to={`/shop/${s.slug}`}>
                                    <img src={s.thumbnail} alt={s.title} className={`${noColumngrid ? "w-50 md:w-70" : "w-50"}`} />
                                </Link>

                            </div>
                            <div className={`flex flex-col  items-start ${noColumngrid ? "max-w-[50%] px-5 md:max-w-[60%] w-full" : "min-w-full  md:w-70"}`}>
                                <h3 className={`${noColumngrid ? "text-[10px] md:text-[12px]" : "text-[12px] sm:text-[14px]"} hover:text-(--accent-secondary) font-normal `}>{s.title}</h3>
                                <div className='flex gap-1 items-center'>
                                    <span className={`line-through text-gray-600 ${noColumngrid ? "text-[8px] md:text-[12px]" : "text-[12px] md:text-[14px]"} font-medium`}>${s.originalPrice}</span>
                                    <span className={`${noColumngrid ? "text-sm md:text-lg" : "text-lg md:text-xl"} font-medium`}>${s.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                )
            })}
        </>
    )
}

export default ProductCards