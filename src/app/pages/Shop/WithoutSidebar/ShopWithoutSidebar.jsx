// ShopWithoutSidebar.jsx
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import NewArrivalsProducts from '../../../components/Home/NewArrivals/NewArrivalsProducts'
import { newProductsData } from '../../../../features/settings/api'
import PaginationButtons from './PaginationButtons'
import ShopFilter from './ShopFilter'
import useProductFilterization from '../../../layouts/providers/useProductFilterization'
import { useShallow } from 'zustand/shallow'

const ShopWithoutSidebar = ({ Popular = false, products = [], BrowseByCategory = false }) => {
  const [pages, setPages] = useState(1)
  const [filterType, setFilterType] = useState(() => Popular ? "Best Selling" : "")
  const [noColumngrid, setNoColumnGrid] = useState(false)

  const { categoryFilter, colorFilter, rangeFilter } = useProductFilterization(
    useShallow((state) => ({
      categoryFilter: state.categoryFilter,
      colorFilter: state.colorFilter,
      rangeFilter: state.rangeFilter,
    }))
  )

  const sourceProducts = BrowseByCategory ? products : newProductsData

  const zustandFiltered = useMemo(() => {
    let result = sourceProducts

    if (categoryFilter.length > 0) {
      result = result.filter((product) => categoryFilter.includes(product.category))
    }

    if (colorFilter.length > 0) {
      result = result.filter((product) => {
        if (!product.colorOptions || product.colorOptions.length === 0) return false
        return product.colorOptions.some((colorOption) =>
          colorFilter.some((selected) => selected.toLowerCase() === colorOption.name.toLowerCase())
        )
      })
    }

    if (Array.isArray(rangeFilter) && rangeFilter.length === 2) {
      const [min, max] = rangeFilter
      result = result.filter((product) => product.price >= min && product.price <= max)
    }

    return result
  }, [sourceProducts, categoryFilter, colorFilter, rangeFilter])

  const bestSelling = useMemo(() => {
    return [...zustandFiltered].sort(
      (a, b) => (b.unitsSold / b.initialStock) - (a.unitsSold / a.initialStock)
    )
  }, [zustandFiltered])

  const latestProducts = useMemo(() => {
    return [...zustandFiltered].sort((a, b) => b.launchDate - a.launchDate)
  }, [zustandFiltered])

  const filteredProducts = useMemo(() => {
    if (filterType === "Latest Products") return latestProducts
    if (filterType === "Best Selling") return bestSelling
    return zustandFiltered
  }, [filterType, latestProducts, bestSelling, zustandFiltered])

  useEffect(() => {
    setPages(1)
  }, [categoryFilter, colorFilter, rangeFilter, filterType])

  const productsPerPage = 8
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const start = (pages - 1) * productsPerPage
  const end = start + productsPerPage
  const currentPageCount = filteredProducts.slice(start, end).length

  const handleFilterType = useCallback((data) => {
    setFilterType(data)
  }, [])

  const handleGridType = useCallback((data) => {
    setNoColumnGrid(Boolean(data))
  }, [])

  return (
    <div className='flex flex-col items-center my-10 w-full'>
      <div className='w-full md:w-[90%]'>
        <ShopFilter
          Popular={Popular}
          productsLength={sourceProducts.length}
          slicedProducts={currentPageCount}
          handleFilterType={handleFilterType}
          handleGridType={handleGridType}
          noColumngrid={noColumngrid}
        />
        <NewArrivalsProducts
          products={filteredProducts}
          shopDifferentPage={true}
          start={start}
          end={end}
          noColumngrid={noColumngrid}
        />
        <PaginationButtons
          totalProducts={totalPages}
          pages={pages}
          setPages={setPages}
        />
      </div>
    </div>
  )
}

export default ShopWithoutSidebar