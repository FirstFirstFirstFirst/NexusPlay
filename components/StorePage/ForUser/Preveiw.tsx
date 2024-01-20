import React,{useState} from 'react'
import Image from 'next/image';
import games from '@/constants/games';
const Preveiw = () => {
  const [game , setGame] = useState(0);
  const handleNext = () => {
    if (game !== games.length - 1) {
      setGame(game + 1);
      return;
    } else {
      setGame(0);
      return;
    }

    
  }
  const handlePrev = () => {
    if (game !== 0) {
      setGame(game - 1);
      return;
    } else {
      setGame(games.length - 1);
      return;
    }
    
  }
  return (
    <div>
      <div className='flex flex-row justify-center items-center'>

      <Image src={games[game].photo}
    alt='Wait for api'
    width={12000}
    height={1200} 
    className='w-[1360px]'
    />
      </div>
      <div className='flex flex-row justify-center'>

        <div className='relative w-[1360px] overflow-hidden flex flex-row gap-3 justify-between mt-2  '>

        <button onClick={handlePrev}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>



          <div className='flex flex-row justify-between gap-4'>
            
            {games.map(eachgame => 
              <Image 
              onClick={()=>{setGame(eachgame.id - 1); }}
              key={eachgame.id} 
              src={eachgame.photo}
              alt='Wait for api'
              width={100}
              height={40} />
            )}
          </div>
            
              

            <button onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
        </div>
      </div>


</div>
  )
}

export default Preveiw