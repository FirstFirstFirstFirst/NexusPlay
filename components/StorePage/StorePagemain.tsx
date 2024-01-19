import React from 'react'
import StoreDisplay from './ForGuest/StoreDisplay';
import ActionDisplay from './ForGuest/ActionDisplay';
const StorePagemain = () => {
  return (
    <div className='pt-[85px] pl-[120px] pr-[60px] pb-10 flex flex-row gap-[110px]  '>
      <StoreDisplay />
      <ActionDisplay/>
    </div>
  )
}

export default StorePagemain