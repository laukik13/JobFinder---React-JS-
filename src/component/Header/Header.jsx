import React from 'react'
import Logo from '../Logo/Logo'
import { GrMenu } from "react-icons/gr";
import Themeselect from '../Select/Themeselect';
import { useSelector } from 'react-redux';

const Header = () => {


  const theme = useSelector((state)=> state.theme.theme);


  return (
    <div className={`w-full py-1 px-6 flex justify-between items-center ${theme === 'light' ? 'bg-white text-black' : 'bg-slate-950 text-white'}`}>
        {/* <Logo/> */}
        <div >
        <GrMenu className="text-slate-400 block lg:hidden" style={{ fontSize: "22px" }}/>
        </div>
        <h1 className='text-slate-400 text-lg'>Explore New Jobs !</h1>
        <div>
             <Themeselect/>
        </div>
    </div>
  )
}

export default Header
