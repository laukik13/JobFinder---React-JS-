import React from 'react'

const Title = ({title,icon,className=''}) => {
  return (
    <div className={`flex justify-start items-center gap-2 ${className}`}>
      {
        icon && <p>{icon}</p>
      }
     <h1 className='font-bold text-2xl'>{title}</h1>
   </div>
  )
}

export default Title
