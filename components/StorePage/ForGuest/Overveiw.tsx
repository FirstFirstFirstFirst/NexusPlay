import React , {useState} from 'react'
import Preveiw from './Preveiw'
type OverveiwProps = {
  id: number;
}

const Overveiw:React.FC<OverveiwProps> = ({id}) => {
      const [active, isactive] = useState<boolean>(false);
  return (
    <div >
      <Preveiw Id={id}/>
      <div  className={`text-white text-ellipsis whitespace-normal overflow-hidden ${active? '':'h-[140px]'} text-sm mt-8 text-justify`}>Embark on an epic journey in Chronicles of Elysium a groundbreaking role-playing adventure that transports players to a mesmerizing world brimming with magic, mystery, and danger. As the chosen hero, you awaken in the ancient city of Eldoria, now under the shadow of an impending catastrophe. The narrative unfolds through richly crafted storytelling, immersing players in a tapestry of lore, forgotten civilizations, and prophetic destinies. Roam freely across diverse landscapes, from the lush elven forests to the desolate, war-torn plains inhabited by fierce orc tribes. Uncover the secrets of powerful relics, each with a unique history and arcane abilities that can tip the balance of power in your favor. Engage in strategic turn-based battles, where your decisions influence the unfolding saga. Build alliances or forge rivalries with a cast of compelling characters, each with their own motives and backstories. The dynamic day-night cycle and weather system add an extra layer of realism, affecting both the environment and gameplay. Craft legendary weapons, master ancient spells, and confront formidable adversaries as you unravel the layers of an intricately woven narrative. Chronicles of Elysium isnt just a game; its an immersive odyssey where every choice shapes your destiny in a world waiting to be discovered. Are you ready to become a legend?</div>
      <button onClick={() => active ? isactive(false):isactive(true)} className= 'bg-white w-full mt-2  h-8 rounded-3xl'>{active ? "Show less":"Show More"}</button>
    </div>
  )
}

export default Overveiw