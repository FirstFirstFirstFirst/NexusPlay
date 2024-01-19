import React from 'react'
import Image from 'next/image';
import Card from './Card'

type VitoriesProps = {
  Cardcount: number;

}

const Vitories:React.FC<VitoriesProps> = ({Cardcount}) => {
  const cardsArray = Array.from({ length: Cardcount }, (_, index) => index);
  return (
    <div>
      <Image src='https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Wait for api'
            width={1200}
            height={100} />
      <div className='flex flex-row gap-3 justify-center mt-2'>
      <Image src='https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Wait for api'
            width={70}
            height={40} />
      <Image src='https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Wait for api'
            width={70}
            height={40} />
      <Image src='https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Wait for api'
            width={70}
            height={40} />
      <Image src='https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Wait for api'
            width={70}
            height={40} />
      </div>
      <div className='grid grid-cols-3 gap-[10px]'>
      {cardsArray.map((_, index) => <Card key={index} />)}
      </div>
      </div>
  )
}

export default Vitories