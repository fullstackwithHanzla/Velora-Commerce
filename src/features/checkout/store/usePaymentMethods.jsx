import React from 'react'
import { create } from 'zustand'

const usePaymentMethods = create((set) => ({
    SelectedPaymentMethod : "Stripe",
    setSelectedPaymentMethod : (value) => {
        set({ SelectedPaymentMethod: value })
    }
}))

export default usePaymentMethods