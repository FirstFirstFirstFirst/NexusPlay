import React from 'react'
import Overview from './Overview'
const Top = () => {
  return (
    <div className='flex flex-row justify-between w-[inherit]'>
      <p className='text-3xl font-bold'>Game Name</p>
      <Overview />
    </div>
  )
}

export default Top