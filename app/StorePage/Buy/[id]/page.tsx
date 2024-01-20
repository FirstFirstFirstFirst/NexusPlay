import React from 'react'
import StorePagemain from '@/components/StorePage/StorePagemain'

const Page = ({params} : {params: {id: number}}) => {
  return (
    <div>
      <StorePagemain id={params.id}/>
    </div>
  )
}

export default Page