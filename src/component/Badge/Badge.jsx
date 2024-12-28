import React from 'react'

const Badge = ({bgColor="bg-lime-300", textColor="text-green-700" ,label, ...props }) => {
  return (
    <div className={`w-fit px-2 py-1 rounded-lg ${bgColor}`}>
        <h1 className={`${textColor}`}>{label}</h1>
    </div>
  )
}

export default Badge
