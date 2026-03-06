import React, { memo, useEffect, useState } from 'react'
import useQuickViewStore from '../../../layouts/providers/useQuickViewStore'
import { useShallow } from 'zustand/shallow'
import { newProductsData } from '../../../../features/settings/api'
import ProductImgType from './ProductImgType'

const QuickView = memo(() => {
    const {quickViewId ,quickViewActive ,quickViewActiveStatus, closeQuickView} = useQuickViewStore(
        useShallow(state => ({
            quickViewId : state.quickViewId,
            quickViewActive :  state.quickViewActive,
            quickViewActiveStatus : state.quickViewActiveStatus,
            closeQuickView : state.closeQuickView,
        }))
    )
    // qvProd === quickView Product
    const qvProd = newProductsData?.find((item) => item.id === quickViewId)


    const [defaultImgUrl,setDefaultImgUrl] = useState(null)
    useEffect(()=>{
        if(qvProd?.images.length){
            setDefaultImgUrl({url : qvProd.images[0]})
        }
    },[qvProd?.id])
  return (
    <>
        {qvProd && <div onClick={()=>{
            closeQuickView()
            setDefaultImgUrl({url : null})
        }} className={`fixed z-4 top-0 border border-red-700 inset-0 w-full flex justify-center items-center ${quickViewId === null? "hidden" : "block"}`}>
        <div onClick={(e)=>e.stopPropagation()} className='absolute z-5 border w-[90%] p-3 md:w-[80%] lg:w-[60%] flex  gap-3 bg-white'>
            {/* Product image types */}
            <ProductImgType qvProd={qvProd} setDefaultImgUrl={setDefaultImgUrl}/>
            {/* Product thumbnail */}
            <div className='bg-gray-400/30 rounded-lg border border-gray-600/30'>
                <img src={defaultImgUrl?.url} alt={qvProd?.title} className='w-100 '/>
            </div>
            {/* Product minimum details */}
            <div></div>
        </div>
    </div>}
    </>
  )
})

export default QuickView