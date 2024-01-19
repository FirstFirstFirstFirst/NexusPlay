import React from 'react'
import Card from './Card'
import Preveiw from './Preveiw'
type VitoriesProps = {
  Cardcount: number;

}

const Vitories:React.FC<VitoriesProps> = ({Cardcount}) => {
  const cardsArray = Array.from({ length: Cardcount }, (_, index) => index);
  return (
    <div>
      <Preveiw />
      <div className='grid grid-cols-3 gap-[10px]'>
      {cardsArray.map((_, index) => <Card key={index} />)}
      </div>
      </div>
  )
}

export default Vitories