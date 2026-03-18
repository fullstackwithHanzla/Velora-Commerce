import React, { createContext, useEffect } from 'react'
import ShopWithoutSidebar from './Shop/WithoutSidebar/ShopWithoutSidebar'
import useShopFilter from '../layouts/providers/useShopFilter';
import { useShallow } from 'zustand/shallow';
import FilterizationForShop from './ShopWithSidebarFilter/FilterizationForShop';
import useProductFilterization from '../layouts/providers/useProductFilterization';
import { useLocation } from 'react-router-dom';

export const shopFilterContext = createContext();
const Shop = () => {
  const ShopWithSidebar = true;

  const clearAllFilters = useProductFilterization((state) => state.clearAllFilters)

  const location = useLocation()

  useEffect(() => {
    clearAllFilters();
  }, [location.pathname])
  
  
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