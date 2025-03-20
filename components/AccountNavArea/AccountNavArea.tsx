'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const UserNavArea = () => {
  const pathName = usePathname()

  let navMenu:{
    title:string
    link:string
  }[]

 navMenu = [
  {
    title:'Personal Details',
    link:'/account-settings/personal-details',
  },
  {
    title:'Notification Managment',
    link:'/account-settings/notification-managment',
  },
  {
    title:'Help & Support ',
    link:'/account-settings/help',
  }
 ]

  return (
    <div className='flex h-[50px] items-center justify-between [&>*]:p-2 [&>*]:px-3  bg-neutral-100 rounded-lg p-1'>
      {navMenu.map((item,idx)=><Link key={idx} href={item.link} className={`${pathName.endsWith(item.link) ? 'bg-white text-[#5C5C5C] rounded-md shadow-md' : 'text-[#7A7A7A]'}`}>
        {item.title}
      </Link>)}
    </div>
  )
}

export default UserNavArea
