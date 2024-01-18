import React from 'react'
import Decoraion from './Decortaion';
interface DecorationDisplayProps {
  numberOfColumns: number; // Specify the type for numberOfColumns
}

function DecoraionDisplay({ numberOfColumns }: DecorationDisplayProps) {
  return (
    <div className=" h-[80%] w-full bg-white bg-opacity-60 rounded-[20px]">
      <div className={`h-auto m-5 grid grid-cols-${numberOfColumns} gap-4`}>
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
        <Decoraion />
      </div>
    </div>
  );
}

export default DecoraionDisplay