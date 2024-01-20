"use client";

import React,{useState} from 'react'
import Top from './Top'
import Overveiw from './Overview'
import Vitories from './Vitories'

type StoreDisplayProps = {
  id: number;
}
const StoreDisplay:React.FC<StoreDisplayProps>= ({id}) => {

  const [active, isactive] = useState<boolean>(true);


  return (
    <div >

      {/*Display zone  */}
      <div className='  w-[1390px]'>
        <Top handleVitories={() => {isactive(false)}} handleveiw={() => {isactive(true)}} active={active}/>
      </div>
      <div className={`mt-3 w-[1390px]`}>
        {active ? <Overveiw id={id}/> : <Vitories Cardcount={6}/>}
      </div>
    </div>
  )
}

export default StoreDisplay