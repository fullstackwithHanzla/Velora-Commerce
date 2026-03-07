import React, { memo } from 'react'

const QuickProductThumbnail = memo(({defaultImgUrl , qvProd}) => {
  return (
    <div className='bg-gray-400/30 flex p-5 items-center justify-center h-60 w-60 rounded-lg border border-gray-600/30'>
                <img src={defaultImgUrl?.url} alt={qvProd?.title} className='grow '/>
    </div>
  )
})

export default QuickProductThumbnail