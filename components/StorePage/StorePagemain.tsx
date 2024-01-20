import React from 'react'
import StoreDisplay from './ForGuest/StoreDisplay';
import ActionDisplay from './ForGuest/ActionDisplay';

type StorePagemainProps = {
  id: number;
}

const StorePagemain:React.FC<StorePagemainProps> = ({id}) => {
  return (
    <div className='pt-[85px]  pl-[120px] pr-[60px] pb-10 flex flex-row gap-[110px]  '>
      <StoreDisplay id={id}/>
      <ActionDisplay/>
    </div>
  )
}

export default StorePagemain