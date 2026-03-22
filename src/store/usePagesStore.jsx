

import React from 'react'
import { create } from 'zustand'

const usePagesStore = create((set) => ({
    isPageDropdownOpen : false,
    
    checkDropDownStatus : () => {
        set((state) => ({
            isPageDropdownOpen : !state.isPageDropdownOpen
        }))
    }
})) 

export default usePagesStore