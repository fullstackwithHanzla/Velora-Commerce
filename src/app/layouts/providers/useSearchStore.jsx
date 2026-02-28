

import React from 'react'
import { create } from 'zustand'

const useSearchStore = create((set) => ({
    isSearchInputActive : false,
    
    checkSearchInputStatus : () => {
        set((state) => ({
            isSearchInputActive : !state.isSearchInputActive
        }))
    }
})) 

export default useSearchStore