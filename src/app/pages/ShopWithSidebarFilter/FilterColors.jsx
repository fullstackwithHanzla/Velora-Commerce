// FilterColors.jsx
import React, { memo } from "react"
import { newProductsData } from "../../../features/settings/api"
import useProductFilterization from "../../layouts/providers/useProductFilterization"
import { FaCheck } from "react-icons/fa6"

const FilterColors = memo(({ colorsDropDown }) => {
    const colorFilter = useProductFilterization((state) => state.colorFilter)
    const setcolorFilter = useProductFilterization((state) => state.setcolorFilter)

    const uniqueColors = React.useMemo(() => {
        const seen = new Set()
        const result = []
        newProductsData.map((product) => {
            product.colorOptions.map((colorOption) => {
                if (!seen.has(colorOption.name)) {
                    seen.add(colorOption.name)
                    result.push(colorOption)
                }
            })
        })
        return result
    }, [newProductsData])

    return (
        <div style={{ display: colorsDropDown ? 'block' : 'none' }}>
            <div className="p-3.5 flex flex-wrap gap-3">
                {uniqueColors.map((color) => (
                    <span
                        key={color.name}
                        onClick={() => setcolorFilter(color.name)}
                        style={{ backgroundColor: color.hex }}
                        className={`border flex items-center justify-center rounded-full h-6 w-6 cursor-pointer transition-all
              ${colorFilter.includes(color.name)
                                ? "border-amber-900 scale-110"
                                : "border-gray-600/20 hover:border-gray-400"
                            }`}
                    >
                        {colorFilter.includes(color.name) ? <FaCheck className="text-white/90 size-3" /> : null}
                    </span>
                ))}
            </div>
        </div>
    )
})

export default FilterColors