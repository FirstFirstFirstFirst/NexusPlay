"use client";

import React ,{useState} from "react"
type PageToggleProps = {
  active:boolean;
  handleveiw:(event:React.MouseEvent<HTMLButtonElement>)=>void;
  handleVitories:(event:React.MouseEvent<HTMLButtonElement>)=>void;
}
const PageToggle:React.FC<PageToggleProps> = ({handleveiw,handleVitories,active}) => {


  return (
    <div className='border-2 overflow-hidden rounded-xl  h-10 flex  item-center  justify-center  w-[200px]  font-bold'>
      <button  onClick={handleveiw} className={`${active? 'bg-white text-[#b00101] w-full pl-[5px] py-1 duration-500 ease-out':'bg-transparency text-white w-full pl-[5px] py-1 duration-500 ease-out'}`}>Overview</button>
      <button  onClick={handleVitories} className={`${active? 'bg-transparency text-white w-full  pr-[5px] py-1 duration-500 ease-out':'bg-white text-[#b00101] w-full  pr-[5px] py-1 duration-500 ease-out'}`}>Vitories</button>
    </div>
  )
}

export default PageToggle 