// FilterizationForShop.jsx
import React, { useMemo, useState } from "react"
import useShopFilter from "../store/useShopFilter"
import { useShallow } from "zustand/shallow"
import { VscClose } from "react-icons/vsc"
import { FaAngleDown } from "react-icons/fa6"
import CategoryDropDown from "./CategoryDropDown"
import FilterColors from "./FilterColors"
import PriceDropDown from "./PriceDropDown"
import useProductFilterization from "../../products/store/useProductFilterization"
import { newProductsData } from "../../blog/api"

const FilterizationForShop = () => {
  const { isFilterOpen, setIsFilterOpen } = useShopFilter(
    useShallow((state) => ({
      isFilterOpen: state.isFilterOpen,
      setIsFilterOpen: state.setIsFilterOpen,
    }))
  )

  const [categoryDropDown, setcategoryDropDown] = useState(true)
  const [colorsDropDown, setcolorsDropDown] = useState(true)
  const [priceDropDown, setpriceDropDown] = useState(true)

  const maxPrice = useMemo(() =>
    Math.max(...newProductsData.map((p) => p.price))
    , [newProductsData])

  const [value, setValue] = useState([0, maxPrice])

  const clearAllFilters = useProductFilterization((state) => state.clearAllFilters)

  function handleClearAll() {
    clearAllFilters()
    setValue([0, maxPrice])
  }

  return (
    <div className="fixed inset-0 w-screen z-20 pointer-events-none">
      <div
        onClick={setIsFilterOpen}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out
          ${isFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
      />
      <div
        className={`absolute left-0 top-0 flex flex-col min-h-screen h-full w-full xs:w-100 md:w-80
          bg-[#f0f0f0] transition-transform duration-500 ease-in-out
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
          pointer-events-auto`}
      >
        <div className="flex flex-col min-h-full justify-between">
          <div>
            <div className="h-20 flex items-center justify-between px-6">
              <h1 className="text-[13px] hover:text-(--accent-secondary) font-medium text-gray-600 sm:text-xl">
                Filters
              </h1>
              <button
                onClick={setIsFilterOpen}
                className="p-3 text-2xl text-gray-600 hover:text-(--accent-secondary)"
                aria-label="Close sidebar"
              >
                <VscClose />
              </button>
            </div>
            <hr className="text-black/30" />
            <div className="overflow-y-scroll flex p-4 flex-col gap-5">
              <div className="flex items-center justify-between bg-white rounded-md p-3.5">
                <span className="text-gray-600">Filters:</span>
                <span onClick={handleClearAll} className="text-(--accent-secondary) cursor-pointer hover:text-blue-600">
                  Clean All
                </span>
              </div>

              <div className="flex flex-col bg-white rounded-md">
                <div onClick={() => setcategoryDropDown((prev) => !prev)}
                  className={`flex items-center p-3.5 justify-between ${categoryDropDown ? "border-b border-gray-600/20" : ""}`}>
                  <span>Category</span>
                  <FaAngleDown className={`text-gray-600 transition-all duration-300 ease-in-out ${categoryDropDown ? "" : "rotate-180"}`} />
                </div>
                <CategoryDropDown categoryDropDown={categoryDropDown} />
              </div>

              <div className="flex flex-col bg-white rounded-md">
                <div onClick={() => setcolorsDropDown((prev) => !prev)}
                  className={`flex items-center p-3.5 justify-between ${colorsDropDown ? "border-b border-gray-600/20" : ""}`}>
                  <span>Colors</span>
                  <FaAngleDown className={`text-gray-600 transition-all duration-300 ease-in-out ${colorsDropDown ? "" : "rotate-180"}`} />
                </div>
                <FilterColors colorsDropDown={colorsDropDown} />
              </div>

              <div className="flex flex-col bg-white rounded-md">
                <div onClick={() => setpriceDropDown((prev) => !prev)}
                  className={`flex items-center p-3.5 justify-between ${priceDropDown ? "border-b border-gray-600/20" : ""}`}>
                  <span>Price</span>
                  <FaAngleDown className={`text-gray-600 transition-all duration-300 ease-in-out ${priceDropDown ? "" : "rotate-180"}`} />
                </div>
                <PriceDropDown value={value} setValue={setValue} priceDropDown={priceDropDown} maxPrice={maxPrice} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterizationForShop