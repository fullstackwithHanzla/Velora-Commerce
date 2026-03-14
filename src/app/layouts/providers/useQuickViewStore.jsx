import { create } from "zustand";

import React from 'react'

const useQuickViewStore = create((set) => ({
    quickViewId : null,
    quickViewActive : false,
    quantity : 1,
    setQuantity: (change) => {
    set((state) => ({
        quantity: typeof change === 'function'
            ? change(state.quantity)
            : change
    }))
},
    quickViewActiveStatus : () => !state.quickViewActive,
    showQuickView : (id) => set({quickViewId : id}),
    closeQuickView : () => set({quickViewId : null})
}))

export default useQuickViewStore