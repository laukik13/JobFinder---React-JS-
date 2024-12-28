import React from 'react'

const Subtitle = ({title , className='',icon}) => {
  return (
   <div className={`flex justify-start items-center gap-2 ${className}`}>
      {
        icon && <p>{icon}</p>
      }
     <h1 className='font-bold text-lg'>{title}</h1>
   </div>
  )
}
export default Subtitle
