import React from 'react'
import PageToggle from './PageToggle'

type TopProps = {
  // active: boolean;
  // handleVitories: () => void;
  // handleveiw: () => void;
}


const Top:React.FC<TopProps> = () => {

  return (
    <div className='flex flex-row justify-between items-center w-[inherit]'>
      <p className='text-3xl text-white font-bold'>Game Name</p>
      <PageToggle />
    </div>
  )
}

export default Top