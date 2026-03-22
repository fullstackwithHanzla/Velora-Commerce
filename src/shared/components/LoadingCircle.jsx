import React from 'react'

const LoadingCircle = () => {
  return (
    <div className='min-h-screen flex items-center justify-center min-w-screen'>
      <div
    className="inline-block h-12 w-12 animate-spin rounded-full border-3 border-solid border-(--accent-secondary) border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
  </div>
    </div>
  )
}

export default LoadingCircle