import React, { useState , useReducer, ReactElement } from 'react'
import Overveiw from './Overveiw'
import Vitories from './Vitories'

// const Page:ReactElement[] = [<Overveiw /> , <Vitories />]


const Reducer = (state:ReactElement , action:any) => {
  switch (action.type) {
    case 'Overveiw':
      return <Overveiw />
    case 'Vitories':
      return <Vitories />
    default:
      return state
  }
}

const Pagebox = () => {
  // const [active , isactive] = useReducer(Reducer,Page)
  return (
    <div></div>
  )
}

export default Pagebox