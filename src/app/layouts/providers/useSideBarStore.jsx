import React from 'react'
import { create } from 'zustand'

const useSideBarStore = create((set) => ({
    isSideBarOpen : false,
    
    checkSideBarStatus : () => {
        set((state) => ({
            isSideBarOpen : !state.isSideBarOpen
        }))
    }
})) 

export default useSideBarStore