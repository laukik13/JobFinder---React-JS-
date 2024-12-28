import React from 'react'

const Footer = () => {

const currentYear = new Date().getFullYear();

  return (
    <div className='w-full py-3 text-center'>
       <p>&copy;Created by Laukik Palekar <span className='font-bold'>{currentYear}</span></p>
    </div>
  )
}

export default Footer