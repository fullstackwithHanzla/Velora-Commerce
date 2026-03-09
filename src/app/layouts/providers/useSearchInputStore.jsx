import React from 'react'
import { create } from 'zustand'
import { newProductsData } from '../../../features/settings/api';
import { blogsData } from '../../../features/settings/BlogsData';

const useSearchInputStore = create((set , get)=> ({
    query : "",
    filter : "All",

    setQuery : (query) => set({query}),
    setFilter : (filter) => set({filter}),

    filteredProducts : () => {
        const {query} = get();

        return newProductsData?.filter((p) => 
            p.title.toLowerCase().includes(query.toLowerCase())
        )
    },

    filteredBlogs : () => {
        const {query} = get();

        return blogsData?.filter((b) => 
            b.title.toLowerCase().includes(query.toLowerCase())
        )
    }
}))


export default useSearchInputStore