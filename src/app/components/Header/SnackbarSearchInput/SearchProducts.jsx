import React from 'react'

import { Link } from 'react-router-dom';
import SearchBlogs from './SearchBlogs';
import Products from './Products';

const SearchProducts = () => {
    
  return (
    <div className=' h-full overflow-x-scroll  flex flex-col gap-2'>
        <div className='py-5 px-3 lg:px-10 flex flex-col gap-2'>
            <Products/>
            <SearchBlogs/>
        </div>
    </div>
  )
}

export default SearchProducts