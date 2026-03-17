import React, { Activity, memo } from "react";
import { newProductsData } from "../../../features/settings/api";

const FilterColors = memo(({ colorsDropDown }) => {
    const products = newProductsData;

    const uniqueColors = React.useMemo(() => {
        return [
            ...new Set(
                products.flatMap(p =>
                    p.colorOptions.map(c => c)
                )
            )
        ];
    }, [products]);

    return (
        <Activity mode={colorsDropDown ? "visible" : "hidden"}>
            <div className="p-3.5 flex flex-wrap gap-3">
                {uniqueColors.map((color) => (
                    <span style={{backgroundColor : color.hex}} key={color} className={`border border-gray-600/20 rounded-full h-6 w-6 `}></span>
                ))}
            </div>
        </Activity>
    );
});

export default FilterColors;