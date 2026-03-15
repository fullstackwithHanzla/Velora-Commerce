import React, { useState } from 'react'
import ReviewMessage from './ReviewMessage'
import CustomStars from '../../../shared/ui/CustomStars'

const AddReview = () => {
    const defaultTextStyle = "text-gray-600 text-[14px]"
    const [selectedStars, setselectedStars] = useState(0)
  return (
    <div className='flex flex-col gap-4 w-full'>

            <h3 className='text-md md:text-lg'>Add a Review</h3>
            <p  className={`${defaultTextStyle}`}>Your email address will not be published. Required fields are marked *</p>
            <div className='flex gap-2 py-2 items-center'>
                <p className={`${defaultTextStyle}`}>Your Rating*</p>
                {/* Custom rating here */}
              <CustomStars selectedStars={selectedStars} setselectedStars={setselectedStars}/>
            </div>

          <ReviewMessage setselectedStars={setselectedStars}/>
    </div>
  )
}

export default AddReview