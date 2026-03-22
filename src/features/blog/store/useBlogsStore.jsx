

import React from 'react'
import { create } from 'zustand'

const useBlogsStore = create((set) => ({
    isBlogsDropDownOpen : false,
    
    checkBlogsDropDownStatus : () => {
        set((state) => ({
            isBlogsDropDownOpen : !state.isBlogsDropDownOpen
        }))
    }
})) 

export default useBlogsStore