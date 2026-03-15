import React, { useRef, useState } from 'react'
import { useToast } from '../../layouts/providers/ToastProvider';

const ReviewMessage = () => {
    const [currentLengthMessage, setCurrentLengthMessage] = useState(0);
    const maxMessageLength = 250;

    
    const textRef = useRef("")
    const nameRef = useRef("")
    const emailRef = useRef("")

    function handleSubmit(){
        textRef.current.value = ""
        nameRef.current.value = ""
        emailRef.current.value = ""

        
    }
    return (
        <form onSubmit={(e) => e.preventDefault()} className='flex p-5 gap-5 bg-white rounded-md flex-col'>
            <div className='gap-2 flex flex-col'>
                <p className='text-[14px] text-gray-600 '>Comment <span className='text-red-600'>*</span></p>
                <textarea ref={textRef} required onChange={(e) => setCurrentLengthMessage(e.target.value.length)} placeholder='Your Review' className='border border-gray-600/20 p-3 h-30 text-gray-600 text-[14px] focus:outline-blue-600 rounded-md'></textarea>
                <div className='flex justify-between text-[14px] text-gray-600 items-center'>
                    <p>Maximum</p>
                    <p className={`${currentLengthMessage > maxMessageLength ? "text-red-600" : "text-gray-600"}`}>
                        {currentLengthMessage > maxMessageLength ? `Too long by ${currentLengthMessage - maxMessageLength} characters` : `${currentLengthMessage}/250`}
                    </p>
                </div>
            </div>
            <div className='flex gap-5 items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-gray-600 '>Name <span className='text-red-600'>*</span></p>
                    <input ref={nameRef} type="text" required placeholder='Your Name' className='border border-gray-600/20 text-[14px] rounded-md py-2 px-5 grow' />
                </div>
                <div className='flex flex-col  gap-2'>
                    <p className='text-[14px] text-gray-600 '>Email <span className='text-red-600'>*</span></p>
                    <input ref={emailRef} type="email" required placeholder='Your Email' className='border border-gray-600/20 text-[14px] rounded-md py-2 px-5 grow' />
                </div>
            </div>

            <button onClick={handleSubmit} disabled={currentLengthMessage > maxMessageLength} type='submit' className='py-2.5 text-[14px] text-white bg-(--accent-secondary) rounded-md hover:bg-blue-600'>
                Submit Review
            </button>
        </form>
    )
}

export default ReviewMessage