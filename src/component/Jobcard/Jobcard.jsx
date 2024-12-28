import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineClock } from "react-icons/hi";
import { PiMoneyWavy } from "react-icons/pi";
import Badge from "../Badge/Badge";
import Title from "../Title/Title";
import {Link} from 'react-router';
import { useSelector } from "react-redux";

const Jobcard = ({
  companyName,
  companylogo,
  role,
  location,
  skills = [],
  shift,
  pay,
  time,
  className=''
}) => {

  const theme = useSelector((state)=> state.theme.theme);

  return (
    

<Link to={`/job/${companyName}`}>
<div className={`w-full border rounded-lg p-3 cursor-pointer ${theme === 'light' ? 'hover:bg-slate-100 border-slate-300' : 'hover:bg-slate-700 border-slate-600'}`}>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center p-2 gap-5 sm:gap-10">
          <div className="md:w-1/5 w-full">
            <img
              src={companylogo ? companylogo : "https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg"}
              alt={companyName}
              className="w-20 rounded-lg border border-slate-100"
            />
            <h1 className="text-slate-400">{companyName}</h1>
          </div>
          <div className="md:w-3/5 w-full flex flex-col gap-2">
            <Title title={role} />
            <div className="flex justify-start items-center gap-2">
              <IoLocationOutline
                className="text-slate-400"
                style={{ fontSize: "15px" }}
              />
              <p className="text-slate-400">{location}</p>
            </div>
          </div>
        <div className="md:w-1/5 w-full flex flex-col  md:items-end  items-start  gap-2">
          <Badge label={pay} />
          <p className="text-slate-400">{time}</p>
        </div>
      </div>
    </div>
</Link>


  );
};

export default Jobcard;
