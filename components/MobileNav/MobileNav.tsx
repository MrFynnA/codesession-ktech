import React from 'react'
import Plusicon from '../icons/Plusicon'
import AccountIcon from '../icons/AccountIcon'
import AppMenuIcon from '../icons/AppMenuIcon'

const MobileNav = () => {

     let mobileMenu:{
        title:string,
        icon:any
     }[]

     mobileMenu=[
        {
            title:'History',
            icon:<AppMenuIcon/>
        },
        {
            title:'Request',
            icon:<Plusicon/>  
        },
        {
            title:'Settings',
            icon:<AccountIcon/>  
        }
     ]


  return (
    <div className='w-[90%] flex justify-center items-center bg-white'>
     <ul className='[&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:text-sm flex items-center justify-between w-full py-[34px]'>
       {mobileMenu?.map((item,idx)=><li key={idx}>
            <div>{item.icon}</div>
            <p className={`${mobileMenu.length - 1 === idx ? '!text-[#0130C7]' : ''}`}>{item.title}</p>
        </li>)}
     </ul>
    </div>
  )
}

export default MobileNav
