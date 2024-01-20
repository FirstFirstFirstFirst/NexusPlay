import React from 'react'
import RootUserSP from '@/components/StorePage/RootUserSP'

const Page = ({params} : {params: {id: number}}) => {
  return (
    <div className='w-full flex flex-row justify-center '>
      <RootUserSP id={params.id}/>
    </div>
  )
}

export default Page