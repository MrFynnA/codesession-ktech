import React from 'react'
import Link from 'next/link'
import BellIcon from './icons/BellIcon'
import UserIcon from './icons/UserIcon'
import Logo from '../public/Logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-[80px] max-md:h-[44px] w-[80%] max-md:w-[90%] flex justify-between items-center '>
      <div className='flex items-center justify-between w-full'>
          <Link href={'/'} className='cursor-pointer max-md:w-[80px]'><Image src={Logo} alt='logo'/></Link>
          <ul className='flex items-center gap-4 justify-center w-full max-md:!hidden'>
            <li>
             <Link href={'/request-history'} className='text-[#7A7A7A] p-3'>Request history</Link>
            </li>
            <li>
            <Link href={'/account-settings'} className='text-[#0130C7] bg-neutral-100 p-3 rounded-md cursor-pointer'>Account Settings</Link>
            </li>
          </ul>
      </div>
      <div className='flex items-center gap-4'>
       <BellIcon/>
       <Link href={'/account-settings'} className='bg-neutral-100 rounded-full p-1'><UserIcon/></Link>
      </div>
    </div>
  )
}

export default Navbar
