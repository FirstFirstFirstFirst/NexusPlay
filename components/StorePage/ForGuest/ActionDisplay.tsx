import React from 'react'
import Image from 'next/image';
const ActionDisplay = () => {
  return (
    <div className=' h-[841.55px] w-full flex flex-col items-center justify-center '>
      <div className='translate-y-[-100px] w-[259px] '>
        <Image src='https://images.unsplash.com/10/wii.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Buyimg'
        width={1000}
        height={400}
        className='w-[259px] h-[]'/>
        <div className='flex flex-col gap-7 mt-6'>
        <button className='w-[259px] h-12 rounded-full text-white bg-[#FFC700] hover:bg-[#b69317] hover:text-[#d2d2d2] active:text-white active:bg-[#FFC700]'>Buy Now</button>
        <button className='w-[259px] h-12 rounded-full text-white bg-[transparent]  border-2 border-white-2 hover:bg-white hover:text-black transition-all  active:bg-[#dfdfdf]'>ADD TO CART</button>
        <button className='w-[259px] h-12 rounded-full text-white bg-[transparent] border-2 border-white-2 hover:bg-white hover:text-black transition-all active:bg-[#dfdfdf] '>ADD TO WISHLIST</button>

        </div>
      </div>
    </div>
  )
}

export default ActionDisplay
/* image 6 */

