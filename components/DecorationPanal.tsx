import React from 'react'
import Decoraion from './Decortaion';

function DecoraionDisplay() {
  return (
    <div className=" h-[80%] w-full bg-white bg-opacity-60 rounded-[20px]">
      <div className=" h-auto m-5 grid grid-cols-4 gap-4 ">
        <Decoraion/>
      </div>
    </div>
  );
}

export default DecoraionDisplay