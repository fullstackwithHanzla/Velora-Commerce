import React from 'react'
import { create } from 'zustand'

const useShopFilter = create((set) => ({
    isFilterOpen : false,
    
    setIsFilterOpen : () => {
        set((state) => ({
            isFilterOpen : !state.isFilterOpen
        }))
    }
}))



export default useShopFilter