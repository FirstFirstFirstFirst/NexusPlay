import React from 'react'
import Image from 'next/image';
import Card from './Card'
import Preveiw from './Preveiw'
type VitoriesProps = {
  Cardcount: number;
  id: number;
}

const Vitories:React.FC<VitoriesProps> = ({Cardcount,id}) => {
  const cardsArray = Array.from({ length: Cardcount }, (_, index) => index);
  return (
    <div>
      <Preveiw Id={id}/>
      <div className='grid grid-cols-3 gap-[10px]'>
      {cardsArray.map((_, index) => <Card key={index} />)}
      </div>
      </div>
  )
}

export default Vitories