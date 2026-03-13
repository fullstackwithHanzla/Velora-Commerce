import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWishListStore = create(
    persist(
        (set,get) => ({
            wishListId : [],
            
            toggleWishList : (id) => {
                set((state) => ({
                    wishListId : state.wishListId.includes(id)?
                        state.wishListId.filter((item) => item !==id) :
                        [...state.wishListId , id]
                }))
            }
        })
    )
)

export default useWishListStore