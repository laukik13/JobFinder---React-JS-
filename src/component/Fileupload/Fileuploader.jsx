import React, { useId } from 'react'

const Fileuploader = React.forwardRef(({type,placeholder,className='',...props},ref) => {

    const id = useId();

  return (
    <div className=''>
    <input 
      type={type}
      placeholder={placeholder}
      className={`${className}`}
      ref={ref}
      {...props}
      id={id}
    />
  </div>
  )
})

export default Fileuploader
