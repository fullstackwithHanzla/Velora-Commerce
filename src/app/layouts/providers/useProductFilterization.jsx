// useProductFilterization.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useProductFilterization = create(
    persist(
        (set) => ({
            categoryFilter: [],
            colorFilter: [],
            rangeFilter: null,

            setCategoryFilter: (category) => {
                set((state) => {
                    const exists = state.categoryFilter.includes(category)
                    return {
                        categoryFilter: exists
                            ? state.categoryFilter.filter((item) => item !== category)
                            : [...state.categoryFilter, category]
                    }
                })
            },

            setcolorFilter: (colorName) => {
                set((state) => {
                    const exists = state.colorFilter.includes(colorName)
                    return {
                        colorFilter: exists
                            ? state.colorFilter.filter((item) => item !== colorName)
                            : [...state.colorFilter, colorName]
                    }
                })
            },

            setRangeFilter: (rangeValue) => {
                set({ rangeFilter: rangeValue })
            },

            clearAllFilters: () => {
                set({ categoryFilter: [], colorFilter: [], rangeFilter: null })
            }
        }),
        {
            name: 'product-filters',
            partialize: (state) => ({
                categoryFilter: state.categoryFilter,
                colorFilter: state.colorFilter,
                rangeFilter: state.rangeFilter,
            })
        }
    )
)

export default useProductFilterization