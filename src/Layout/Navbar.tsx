import logo from '../assets/logo.png'; // Adjust the path as necessary
import { RiArrowDropDownLine } from "react-icons/ri";
import flag from '../assets/fi_3909383.png'; // Adjust the path as necessary
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import CommonWrapper from '@/common/CommonWrapper';

const Navbar = () => {
  return (
    <CommonWrapper>
    <div className='flex justify-between items-center bg-white p-4'>
        <div className='w-32 h-11 flex items-center justify-center'>
            <img src={logo} alt="" />
        </div>
        <div>
            <ul className='flex gap-4'>
                <li className='text-[16px] font-[500] flex items-center justify-between gap-2'>Categories <RiArrowDropDownLine /></li>
                <li className='text-[16px] font-[500]'>Shop</li>
                <li className='text-[16px] font-[500]'>About</li>
                <li className='text-[16px] font-[500] text-sunset-orange'>Contact</li>
            </ul>
        </div>
        <div className='flex items-center gap-4 text-[16px]'>
            <div >
                <p className='text-sm font-normal text-gray-400'>Delivered To</p>
                <div className='flex items-center gap-1 w-[200px]'>
                    <p className='text-lg font-normal'>USA</p>
                    <img className='text-xl' src={flag} alt="" />
                    <RiArrowDropDownFill className='text-yellow-200 text-4xl' />
                </div>
            </div>
            <div className='flex items-center gap-4 text-2xl'>
            <IoCartOutline />
            <BiWorld />
            <VscThreeBars />
        </div>
        </div>
        
    </div>
    </CommonWrapper>
  )
}

export default Navbar