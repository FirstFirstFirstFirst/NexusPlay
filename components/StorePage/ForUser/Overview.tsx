import React , {useState} from 'react'
import Preveiw from './Preveiw'
type OverveiwProps = {
  id: number;
}
const Overveiw:React.FC<OverveiwProps> = ({id}) => {
      const [active, isactive] = useState<boolean>(false);
  return (
    <div className=''>
      <Preveiw Id={id}/>
      <div  className={`text-white text-ellipsis whitespace-normal overflow-hidden  ${active? '':'h-[140px]'} text-sm mt-8 text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Tempus urna et pharetra pharetra massa massa ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitant morbi tristique senectus et netus et. Arcu bibendum at varius vel. Tristique et egestas quis ipsum suspendisse. Eget egestas purus viverra accumsan in nisl nisi. Nec feugiat nisl pretium fusce. Amet cursus sit amet dictum sit amet justo donec. Lorem ipsum dolor sit amet, consecte.</div>
      <button onClick={() => active ? isactive(false):isactive(true)} className=' bg-white w-full mt-2  h-8 rounded-3xl'>{active ? "Show less":"Show More"}</button>
    </div>
  )
}

export default Overveiw