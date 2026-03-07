import React, { memo, useEffect, useState } from 'react'

const CountDown = memo(({targetDate}) => {
    const [timeLeft,setTimeLeft] = useState({
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0,
    })
    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            const now = Date.now()
            const difference = targetDate - now;

            if(difference <=0){
                setTimeLeft({
                    days : 0,
                    hours : 0,
                    minutes : 0,
                    seconds : 0,
                })
                clearInterval(timeInterval)
                return;
            }

            const days = Math.floor((difference / (1000 * 60 * 60 * 24))).toLocaleString().padStart(2,'0')
            const hours = Math.floor((difference / (1000 * 60 * 60 ) % 24)).toLocaleString().padStart(2,'0')
            const minutes = Math.floor((difference / (1000 * 60 ) % 60)).toLocaleString().padStart(2,'0')
            const seconds = Math.floor((difference / (1000 ) % 60)).toLocaleString().padStart(2,'0')

            setTimeLeft({days : days , hours : hours , minutes : minutes , seconds : seconds})
            
        },1000);
        return()=>{
            clearTimeout(timeInterval)
        }
    },[targetDate])
  return (
    <div className='flex gap-3 justify-start items-center'>
        <div className='px-3 py-1 border border-gray-600/30 bg-white rounded-lg'>
            <h3 className='font-medium text-lg md:text-2xl'>{timeLeft.days}</h3>
        </div>
        <div className='px-3 py-1 border border-gray-600/30 bg-white rounded-lg'>
            <h3 className='font-medium text-lg md:text-2xl'>{timeLeft.hours}</h3>
        </div>
        <div className='px-3 py-1 border border-gray-600/30 bg-white rounded-lg'>
            <h3 className='font-medium text-lg md:text-2xl'>{timeLeft.minutes}</h3>
        </div>
        <div className='px-3 py-1 border border-gray-600/30 bg-white rounded-lg'>
            <h3 className='font-medium text-lg md:text-2xl'>{timeLeft.seconds}</h3>
        </div>
    </div>
  )
})

export default CountDown