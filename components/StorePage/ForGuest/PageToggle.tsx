import React ,{useState} from "react"
type PageToggleProps = {
  // active:boolean;
  // handleveiw:(event:React.MouseEvent<HTMLButtonElement>)=>void;
  // handleVitories:(event:React.MouseEvent<HTMLButtonElement>)=>void;
}
const PageToggle:React.FC<PageToggleProps> = () => {
let active = true
  return (
    <div className='border-2 overflow-hidden rounded-full h-9 flex gap-1 item-center justify-center pl-1.5 w-[180px] font-bold'>
      <button   className={`${active? 'bg-white text-transparency w-full':'bg-transparency text-white w-full'}`}>Overview</button>
      <button   className={`${active? 'bg-transparency text-white w-full':'g-white text-transparency w-full'}`}>Vitories</button>
    </div>
  )
}

export default PageToggle 