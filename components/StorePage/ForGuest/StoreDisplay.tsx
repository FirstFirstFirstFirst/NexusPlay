"use client";

import React,{useState} from 'react'
import Top from './Top'
import Overveiw from './Overveiw'
import Vitories from './Vitories'

const StoreDisplay = () => {

  const [active, isactive] = useState<boolean>(true);


  return (
    <div >

      {/*Display zone  */}
      <div className='  w-[850px]'>
        <Top handleVitories={() => {isactive(false)}} handleveiw={() => {isactive(true)}} active={active}/>
      </div>
      <div className={`mt-3 w-[850px]`}>
        {active ? <Overveiw /> : <Vitories Cardcount={6}/>}
      </div>
    </div>
  )
}

export default StoreDisplay