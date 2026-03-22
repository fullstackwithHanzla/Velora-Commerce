import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWishListStore = create(
    persist(
        (set,get) => ({
            wishListId : [],
            wishList : [],
            
            toggleWishList : (id) => {
                set((state) => ({
                    wishListId : state.wishListId.includes(id)?
                        state.wishListId.filter((item) => item !==id) :
                        [...state.wishListId , id]
                }))
            },

            addToWishList: (product) =>{
                set((state) => {
                    if(state.wishList.some((item) => item.id === product.id)){
                        return state.wishList;
                    }
                    return {wishList : [...state.wishList , product]}
                })
            },

            removeFromWishList : (id) => {
                set((state) => ({
                    wishList : state.wishList.filter((item) => item.id !== id)
                }))
            },


            clearWishList : () => {
                set({wishList : []})
            },
            clearWishListId : () => {
                set({wishListId : []})
            }

        })
    )
)

export default useWishListStore