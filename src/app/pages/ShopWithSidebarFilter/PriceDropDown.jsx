// PriceDropDown.jsx
import React, { memo, useEffect } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import useProductFilterization from '../../layouts/providers/useProductFilterization'
import useDebounceInput from '../../layouts/providers/useDebounceInput'

const PriceDropDown = memo(({ value, setValue, priceDropDown, maxPrice }) => {
    const setRangeFilter = useProductFilterization((state) => state.setRangeFilter)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const debounced = useDebounceInput(value, 500)

    useEffect(() => {
        const [min, max] = debounced
        if (min === 0 && max === maxPrice) {
            setRangeFilter(null)
        } else {
            setRangeFilter(debounced)
        }
    }, [debounced, maxPrice])

    return (
        <div style={{ display: priceDropDown ? 'block' : 'none' }}>
            <div className='py-5 px-10 flex'>
                <Box sx={{ width: 300 }}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        min={0}
                        max={maxPrice}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={(v) => `$${v}`}
                    />
                    <div className='flex justify-between mt-1'>
                        <span className='text-sm'>${value[0]}</span>
                        <span className='text-sm'>${value[1]}</span>
                    </div>
                </Box>
            </div>
        </div>
    )
})

export default PriceDropDown