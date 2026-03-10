import React from 'react'
import { create } from 'zustand'


const useSearchInputStore = create((set , get)=> ({
    query : "",
    filter : "All",

    setQuery : (query) => set({query}),
    setFilter : (filter) => set({filter}),

}))


export default useSearchInputStore