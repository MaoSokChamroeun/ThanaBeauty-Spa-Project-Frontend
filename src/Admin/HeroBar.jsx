import React from 'react'

const HeroBar = ({children}) => {
  return (
    <div className='w-full p-5 bg-gray-300'>
      {children}
    </div>
  )
}

export default HeroBar
