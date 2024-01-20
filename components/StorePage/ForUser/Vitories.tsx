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
      <div className='grid grid-row-1 gap-[10px]'>
      {cardsArray.map((_, index) => <Card key={index} />)}
      </div>
      </div>
  )
}

export default Vitories