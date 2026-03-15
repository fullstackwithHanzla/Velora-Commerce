import React from 'react'
import ReviewMessage from './ReviewMessage'

const AddReview = () => {
    const defaultTextStyle = "text-gray-600 text-[14px]"
  return (
    <div className='flex flex-col gap-4 px-5'>

            <h3 className='text-md md:text-lg'>Add a Review</h3>
            <p  className={`${defaultTextStyle}`}>Your email address will not be published. Required fields are marked *</p>
            <div className='flex gap-2 py-2 items-center'>
                <p className={`${defaultTextStyle}`}>Your Rating*</p>
                {/* Custom rating here */}
            </div>

        <ReviewMessage/>
    </div>
  )
}

export default AddReview