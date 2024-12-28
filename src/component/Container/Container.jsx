import React from 'react'

const Container = ({children}) => {
  return  <main className='overflow-y-auto p-10 w-full lg:w-10/12' style={{height: '875px'}}>{children}</main>
  
}

export default Container
