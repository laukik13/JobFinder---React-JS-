import React from 'react'

const Button = ({children,type='button',bgColor,textColor,className=''}) => {
  return <button type={type} className={`px-3 py-2 rounded-lg hover:bg-black transition-all duration-200 mt-2 ${bgColor} ${textColor} ${className}`}>{children}</button>
}

export default Button
