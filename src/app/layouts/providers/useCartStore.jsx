

import React from 'react'
import { create } from 'zustand'

const useCartStore = create((set) => ({
    isCartOpen : false,
    
    checkCartStatus : () => {
        set((state) => ({
            isCartOpen : !state.isCartOpen
        }))
    }
})) 

export default useCartStore