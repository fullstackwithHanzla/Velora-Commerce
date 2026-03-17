import React, { createContext } from 'react'
import ShopWithoutSidebar from './Shop/WithoutSidebar/ShopWithoutSidebar'
import useShopFilter from '../layouts/providers/useShopFilter';
import { useShallow } from 'zustand/shallow';
import FilterizationForShop from './ShopWithSidebarFilter/FilterizationForShop';

export const shopFilterContext = createContext();
const Shop = () => {
  const ShopWithSidebar = true;
  
  return (
    <div className=' flex justify-center items-start min-w-screen w-full  my-5'>
      <FilterizationForShop/>
      {/*  */}

      <shopFilterContext.Provider value={ShopWithSidebar}>
        <ShopWithoutSidebar />
      </shopFilterContext.Provider>
    </div>
  )
}

export default Shop