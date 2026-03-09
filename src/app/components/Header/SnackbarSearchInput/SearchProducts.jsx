import React from 'react'

import { Link } from 'react-router-dom';
import SearchBlogs from './SearchBlogs';
import Products from './Products';
import useSearchInputStore from '../../../layouts/providers/useSearchInputStore';
import { useShallow } from 'zustand/shallow';

const SearchProducts = () => {

  const {filteredProducts,filteredBlogs,filter} = useSearchInputStore(
    useShallow((state) => ({
      filteredProducts : state.filteredProducts,
      filteredBlogs : state.filteredBlogs,
      filter : state.filter,
    }))
  )

  const products = filteredProducts();
  const blogs = filteredBlogs()
  

  
  

    
  return (
    <div className=' h-full overflow-x-scroll  flex flex-col gap-2'>
        <div className='py-5 px-3 lg:px-10 flex flex-col gap-2'>
          {(filter === "All" || filter === "Products") && <Products products={products}/>}
          {(filter === "All" || filter === "Blogs") && <SearchBlogs blogs={blogs}/>}
        </div>
    </div>
  )
}

export default SearchProducts