import React from 'react'
import Image from 'next/image';

const Card = () => {
  const [clicked , isclicked] = React.useState(false);
  let buttonText =  clicked? "Claimed 1 NEXUS COIN":"Claim 1 NEXUS COIN";
  return (
    <div className='w-full flex flex-row justify-between  items-center bg-white mt-8 rounded-xl p-5'> 

    
      <div className='flex flex-row '>
        <Image src='https://images.unsplash.com/10/wii.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Game Card'
          height={100}
          width={90} className='w-19 h-20'
        />


        <div className='ml-2 overflow-hidden'>
            <h1 className='font-bold'>Card Title</h1>
            <p className='text-xs text-justify'>Reach the pinnacle in a piloting skill, earning the highest level.</p>
        </div>
        
      </div>



      <div className={`${clicked ? 'w-[257px]':'w-[200px]'} flex flex-row justify-center h-[44px]`}>
      <button data-set={buttonText} onClick={() => isclicked(true)} className={`
      overflow-hidden relative  mt-3 w-full rounded-xl  text-[14px] text-center ${clicked ? 'bg-transparent	text-[#00DE65] border  border-[#00DE65]':'bg-[#00DE65] text-white after:content-[attr(data-set)] after:flex after:text-[white] after:absolute hover:after:top-0 after:transition-all after:top-full after:left-0 after:w-full after:h-full after:items-center after:justify-center after:bg-black active:after:bg-[#08532a]'}`}>
        {buttonText}</button>
      </div>


    </div>
  )
}

export default Card
