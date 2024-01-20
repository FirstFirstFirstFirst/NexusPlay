import React from 'react'
import Image from 'next/image';
import './Cardcss.css';

const Card = () => {
  let buttonText =  "1NXC (NEXUS COIN)";
  return (
    <div className='w-[280px] bg-white mt-8 rounded-xl p-5'> 
      <div className='flex flex-row '>
        <Image src='https://images.unsplash.com/10/wii.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Game Card'
          height={100}
          width={90} className='w-19 h-20'
        />
        <div className='ml-2 overflow-hidden'>
            <h1 className='font-bold'>Card TItle</h1>
            <p className='text-xs'>Reach the pinnacle in a piloting skill, earning the highest level.</p>
            
        </div>
      </div>
      <div className='w-full flex flex-row justify-center h-11'>
      <button data-set={'Must own the game to proceed.'} className={`after:content-[attr(data-set)] 
      after:absolute
      after:flex
      after:justify-center
      after:items-center
      after:left-[50%]
      after:translate-x-[-50%]
      after:w-[175px]
      after:rounded-[4px]
      after:h-[20px]
      hover:after:opacity-[.8]
      after:opacity-0
      after:bg-[#e6e6e6]
      after:top-[130%]
      after:text-[10px]
      after:transition
      after-ease-out
      after:duration-[350ms]
       relative mt-3 w-[85%] rounded-xl border text-[14px] text-center border-black`}>
        {buttonText}</button>

      </div>
    </div>
  )
}

export default Card
