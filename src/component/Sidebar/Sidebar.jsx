import React from "react";
import { Link } from "react-router";
import Logo from "../Logo/Logo";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { IoLogInSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sideItems = [
    {
      label: "Home",
      path: "/",
      icon: <IoHome />,
      active: true,
    },
    {
        label: "Filter",
        path: "/filter",
        icon: <IoFilter />,
        active: true,
      },
    {
      label: "Profile",
      path: "/profile",
      icon: <FaUser />,
      active: true,
    },
    {
      label: "Login",
      path: "/login",
      icon: <IoLogInSharp />,
      active: true,
    },
    
  ];

  const theme = useSelector((state)=> state.theme.theme);

  return (
    <div className={`relative ${theme === 'light' ? 'bg-white text-black' : 'bg-slate-950 text-white'} pl-5 hidden lg:block lg:w-2/12`} style={{height: '875px'}}>
      <div className="mb-5 flex justify-center items-center">
      <Logo width={'w-20'}/>
      </div>
      {sideItems.map(
        (item) =>
          item.active && (
            <Link to={item.path} key={item.label}>
              <button className={`w-full flex justify-start items-center gap-5 py-4 md:pl-6 xl:pl-14 pl-0 rounded-l-lg  ${theme === 'light' ?  'focus:bg-slate-200' : 'focus:bg-slate-800' }  transition ease-in-out delay-100`}>
                <p>{item.icon}</p>
                <h1 className="text-lg">{item.label}</h1>
              </button>
            </Link>
          )
      )}

      <Link to="/logout" className="absolute bottom-0 w-11/12">
        <button className="w-full flex justify-start items-center gap-5 py-4 md:pl-6 xl:pl-14 pl-0">
          <p><IoLogOutSharp /></p>
          <h1 className="text-lg">Logout</h1>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
