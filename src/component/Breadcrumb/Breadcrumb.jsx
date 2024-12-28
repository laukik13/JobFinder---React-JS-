import React from 'react'
import { Link } from 'react-router'

const Breadcrumb = ({title,parentPath,currentPath,currentlink}) => {
  return (
    <div className='bg-transparent w-full py-2 px-4 flex justify-between items-center'>
        <h1 className='text-2xl text-violet-500'>{title}</h1>
        <div>
            <p className='text-xl text-slate-300'>{parentPath}&nbsp;/&nbsp;<Link to={currentlink} className='text-violet-500'>{currentPath}</Link></p>
        </div>
    </div>
  )
}

export default Breadcrumb
