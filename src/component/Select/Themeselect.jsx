import React from "react";
import { CiCloudMoon } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/Slice/themeSlice";

const Themeselect = () => {

    const dispatch = useDispatch();

    const handleTheme =(e)=>{
        
        dispatch(toggleTheme(e.target.value));

    }
    
  return (
    <select className="bg-transparent focus:outline-none text-slate-400"  onChange={(e)=>handleTheme(e)}>
      <option className="px-3" value="light">
        <CiSun style={{ fontSize: "22px" }} />
        Light
      </option>
      <option className="px-3" value="dark">
        <CiCloudMoon style={{ fontSize: "22px" }} />
        Dark
      </option>
    </select>
  );
};

export default Themeselect;
