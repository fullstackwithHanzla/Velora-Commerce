import React, { memo } from 'react'

const ProductImgType = memo(({qvProd , setDefaultImgUrl , flexRow = false}) => {
  return (
    <div className={`flex ${flexRow ? "flex-row" : 'flex-col'} gap-3`}>
                    {qvProd?.images?.map((url) => (
                <div key={url} onClick={()=>setDefaultImgUrl({url : url})} className='rounded-lg h-15 w-15 lg:h-25 lg:w-25 flex items-center justify-center  bg-gray-300/30 border border-gray-600/10'>
                        <img src={url} alt={qvProd.title} key={url} className='w-10 lg:w-20 '/>
                </div>
                    ))}
                
            </div>
  )
})

export default ProductImgType