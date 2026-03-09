import React, { memo } from 'react'
import { blogsData } from '../../../../features/settings/BlogsData'
import { Link } from 'react-router-dom'

const SearchBlogs = memo(({blogs}) => {
  return (
    <>
        <h3 className='font-light  text-lg text-center lg:text-xl md:text-start'>BLOGS</h3>
            <div className='flex flex-col  gap-2'>
                {blogs?.map((blog) => (
                    <Link to="" key={blog.id} className='flex-col flex md:flex-row  rounded-md items-center gap-3 hover:bg-gray-400/10 px-5 py-2'>
                        <div className='flex items-center justify-center md:justify-start'>
                            <img src={blog.thumbnail} alt={blog.title} className='w-80 md:w-100 rounded-md border border-gray-400/20'/>
                        </div>
                        <div className='flex flex-col gap-1 text-center md:text-start'>
                            <h3 className='font-normal'>{blog.title}</h3>
                            <p className='font-light text-[10px] lg:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto deleniti temporibus quaerat totam vero id sequi soluta nam, expedita vel, reiciendis officia praesentium distinctio facere ea quam dolorem nisi harum blanditiis et dolores culpa! Nulla possimus est vel cumque!</p>
                        </div>
                    </Link>
                ))}
            </div>
    </>
  )
})

export default SearchBlogs