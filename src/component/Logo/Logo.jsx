import React from "react";
import image from "../Logo/Image/logo.png"
import { useSelector } from "react-redux";

const Logo = ({width,className=''}) => {

  // const theme = useSelector((state)=>state.theme.theme)

  return <img src={image} className={`${width}  ${className} `}  alt="logo"/>;
};

export default Logo;
