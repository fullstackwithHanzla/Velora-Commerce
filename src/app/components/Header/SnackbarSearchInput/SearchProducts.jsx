import React, { useMemo } from 'react'

import { Link } from 'react-router-dom';
import SearchBlogs from './SearchBlogs';
import Products from './Products';
import useSearchInputStore from '../../../layouts/providers/useSearchInputStore';
import { useShallow } from 'zustand/shallow';
import { newProductsData } from '../../../../features/settings/api';
import { blogsData } from '../../../../features/settings/BlogsData';
const SearchProducts = () => {

  const {query,filter} = useSearchInputStore(
    useShallow((state) => ({
      query : state.query,
      filter : state.filter,
    }))
  )

  

  const products = useMemo(()=>{
    return newProductsData.filter((p) => 
      p.title.toLowerCase().includes(query.toLowerCase())
    )
  },[query])
  const blogs = useMemo(()=>{
    return blogsData.filter((b) => 
      b.title.toLowerCase().includes(query.toLowerCase())
    )
  },[query])
  

  if(products.length === 0 && blogs.length === 0){
        return <p className='text-center m-3'>Nothing Found of title : {query}</p>
    }
  

    
  return (
    <div className=' h-full overflow-x-scroll  flex flex-col gap-2'>
        <div className='py-5 px-3 lg:px-10 flex flex-col gap-2'>
          {(filter === "All" || filter === "Products") && products.length > 0 && <Products products={products}/>}
          {(filter === "All" || filter === "Blogs") && blogs.length > 0 && <SearchBlogs blogs={blogs}/>}
        </div>
    </div>
  )
}

export default SearchProducts