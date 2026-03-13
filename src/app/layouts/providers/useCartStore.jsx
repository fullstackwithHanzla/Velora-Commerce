

import React from 'react'
import { create } from 'zustand'
import {persist} from 'zustand/middleware'


const useCartStore = create(
    persist(
        (set ,  get) => ({
    isCartOpen : false,
    cart : [],
    cartId : [],

    toggleCartId: (id) => {
    set((state) => ({
        cartId: state.cartId.includes(id)
            ? state.cartId.filter((item) => item !== id)
            : [...state.cartId, id]
    }))
},
            
    addItem : (product) =>{
        set((state) => {
            const existing = state.cart.find((item) => item.id === product.id)
            if(existing){
                return {
                    cart : state.cart.map((item) => item.id === product.id? {...item , quantity : item.quantity + 1} : item)
                }
            }
            return {cart : [...state.cart , {...product , quantity : 1}]}
        })
    },

    removeItem : (id) => {
        set((state) => ({
            cart : state.cart.filter((item) => item.id !== id)
        }))
    },

    updateQuantity: (id, change) => {
        set((state) => ({
            cart: state.cart.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: Math.max(item.quantity + change, 1)
                }
                : item
            )
        }))
},
    clearCart : () =>{
        set({cart : []})
    },

    
    
    checkCartStatus : () => {
        set((state) => ({
            isCartOpen : !state.isCartOpen
        }))
    }
})
    )
) 

export default useCartStore