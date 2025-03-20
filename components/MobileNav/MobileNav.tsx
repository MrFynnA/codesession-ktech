import React from 'react'
import Plusicon from '../icons/Plusicon'
import AccountIcon from '../icons/AccountIcon'
import AppMenuIcon from '../icons/AppMenuIcon'
import Link from 'next/link'

const MobileNav = () => {

     let mobileMenu:{
        title:string,
        icon:any,
        link:string
     }[]

     mobileMenu=[
        {
            title:'History',
            icon:<AppMenuIcon/>,
            link:''
        },
        {
            title:'Request',
            icon:<Plusicon/> ,
            link:''

        },
        {
            title:'Settings',
            icon:<AccountIcon/> ,
            link:'/account-settings'

        }
     ]


  return (
    <div className='w-[90%] flex justify-center items-center bg-white'>
     <ul className='[&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:text-sm flex items-center justify-between w-full py-[34px]'>
       {mobileMenu?.map((item,idx)=><Link href={item.link} key={idx}>
            <div>{item.icon}</div>
            <p className={`${mobileMenu.length - 1 === idx ? '!text-[#0130C7]' : ''}`}>{item.title}</p>
        </Link>)}
     </ul>
    </div>
  )
}

export default MobileNav
