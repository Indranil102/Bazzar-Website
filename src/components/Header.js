import React from 'react'
import { logoDark } from '../assets'

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
            <img className='w-28' src={logoDark} alt=''/>
        </div>

        <div>
        <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Home</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Page</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Shop</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Element</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Blog</li>

        </ul>
      </div>
      </div>
     
    </div>
  )
}

export default Header
