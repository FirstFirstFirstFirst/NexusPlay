"use client"

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons";

// function Continue(){

// }

// export function loginPage() {
//   return (
//       <>
//         <div className="w-screen h-[47rem]">
//           <div className='flex flex-col justify-center items-center h-full bg-white drop-shadow-xl p-4 rounded-[20px] m-10 text-center'>
//             <div className='text-5xl font-bold'>Get Ready For Gaming Awsomeness!</div>
//             <div className='text-2xl w-[75%] mt-[50px]'>Put in your email to receive a special link and dive into the cool world of NexusPlay.<br/>Use your own email for a smooth gaming ride.</div>
//             <div className='flex flex-row border-2 justify-center items-center border-black mt-[100px] w-[30%] rounded-[10px]'>
//               <FontAwesomeIcon icon={faEnvelope} className='size-[50px] ml-3'/>
//               <input type="text" placeholder='example@domain.com' className="text-xl bg-transparent h-[75px] w-full px-2 py-1 outline-none ml-1"/>
//             </div>
//             <button type='submit' className='bg-[#B30000] text-white h-[75px] w-[30%] rounded-[10px] px-2 py-1 outline-none mt-5 text-xl duration-300 hover:bg-[#9c0000] hover:text-[#ffffff]'>🎮   Continue</button>
//           </div>
//         </div>
//       </>
//     )
// }

// export default loginPage

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function loginPage() {
  const [checkInboxPage, setContinue] = useState(false);
  const [email, setEmail] = useState("");

  const handleContinueClick = () => {
    setContinue(true);
  };

  function getEmail(email: string){
    setEmail(email);
  };


  return (
    <>
      {checkInboxPage ? (
        <div className="w-screen h-[47rem]">
          <div className='flex flex-col justify-center items-center h-full bg-white drop-shadow-xl p-4 rounded-[20px] m-10 text-center'>
            <div className='text-5xl font-bold'>Check Your Inbox! 📧</div>
            <div className='text-2xl w-[75%] mt-[75px]'>We've sent a magic link and a one-time PIN to<br />
            <div className='text-2xl mt-2'>{email}</div>
              <div className='mt-2'>Click the link in your email to keep the fun going.<br /></div>
              <div className='flex flex-row justify-center mt-2'>Alternatively, &nbsp;

                <div className='text-[#1e7ad1] hover: hover:text-[#89bae7] underline'>click here to enter your PIN.</div>

              </div>
            </div>
            <div className='mt-[70px] text-3xl'>Let's keep the gaming vibes strong! 🎮</div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-[47rem]">
          <div className='flex flex-col justify-center items-center h-full bg-white drop-shadow-xl p-4 rounded-[20px] m-10 text-center'>
            <div className='text-5xl font-bold'>Get Ready For Gaming Awesomeness!</div>
            <div className='text-2xl w-[75%] mt-[50px]'>
              Put in your email to receive a special link and dive into the cool world of NexusPlay.<br />
              <div className='mt-2'>Use your own email for a smooth gaming ride.</div>
            </div>
            <div className='flex flex-row border-2 justify-center items-center border-black mt-[100px] w-[30%] rounded-[10px]'>
              <FontAwesomeIcon icon={faEnvelope} className='size-[50px] ml-3' />
              <input type="email" onChange={(e)=>{getEmail(e.target.value)}} placeholder='example@domain.com' className="text-xl bg-transparent h-[75px] w-full px-2 py-1 outline-none ml-1"/>
            </div>
            <button type='button' onClick={handleContinueClick} className='bg-[#B30000] text-white h-[75px] w-[30%] rounded-[10px] px-2 py-1 outline-none mt-[30px] text-xl duration-300 hover:bg-[#9c0000] hover:text-[#ffffff]'>
              🎮 Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default loginPage;