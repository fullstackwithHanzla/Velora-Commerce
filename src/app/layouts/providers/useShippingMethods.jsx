import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useShippingMethods = create(
    
        (set) => ({
            selectedShippingMethod : "freeShipping",
            setselectedShippingMethod : (value) => {
                set({ selectedShippingMethod: value })
            }
        })
    
)

export default useShippingMethods