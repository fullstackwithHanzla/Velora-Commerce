import React, { createContext } from 'react'
import ShopWithoutSidebar from './Shop/WithoutSidebar/ShopWithoutSidebar'

export const shopFilterContext = createContext();
const Shop = () => {
  const ShopWithSidebar = true
  return (
    <div className=' relative flex justify-center items-start w-full  my-5'>

        {/*  */}
        
      <shopFilterContext.Provider value={ShopWithSidebar}>
             <ShopWithoutSidebar/>
        </shopFilterContext.Provider>
    </div>
  )
}

export default Shop