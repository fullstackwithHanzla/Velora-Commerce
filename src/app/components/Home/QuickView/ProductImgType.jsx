import React, { memo } from 'react'

const ProductImgType = memo(({qvProd , setDefaultImgUrl}) => {
  return (
    <div className=' flex flex-col  gap-3'>
                    {qvProd?.images?.map((url) => (
                <div onClick={()=>setDefaultImgUrl({url : url})} className='rounded-lg  bg-gray-300/30 border border-gray-600/30'>
                        <img src={url} alt={qvProd.title} key={url} className='w-30 '/>
                </div>
                    ))}
                
            </div>
  )
})

export default ProductImgType