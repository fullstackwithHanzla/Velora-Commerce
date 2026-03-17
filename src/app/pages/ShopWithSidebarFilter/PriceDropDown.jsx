import React, { Activity, memo } from 'react'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const PriceDropDown = memo(({ priceDropDown })=>{
    function valuetext(value) {
      return `${value}`;
    }
    
    
      const [value, setValue] = React.useState([0, 999]);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    
    return (
        <Activity mode={priceDropDown ? "visible":"hidden"} >
                    <div className='py-5 px-10 flex'>
                <Box sx={{ width: 300 }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        max={999}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <div className='flex justify-between '>
                        <span>${value[0]}</span>
                        <span>${value[1]}</span>
                    </div>
                </Box>
                    </div>
        </Activity>
    )
})

export default PriceDropDown