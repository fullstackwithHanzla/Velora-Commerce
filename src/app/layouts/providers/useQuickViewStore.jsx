import { create } from "zustand";

import React from 'react'

const useQuickViewStore = create((set) => ({
    quickViewId : null,
    quickViewActive : false,
    quickViewActiveStatus : () => !state.quickViewActive,
    showQuickView : (id) => set({quickViewId : id}),
    closeQuickView : () => set({quickViewId : null})
}))

export default useQuickViewStore