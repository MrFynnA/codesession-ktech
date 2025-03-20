'use client'
import React from 'react'

const page = () => {

    const userAccountDetails=[
        {
           title:'Personal Details',
           discription:' Manage your personal details like name, contact and address'
        },
        {
          title:'Name and Address',
           discription:'John Kwame, 32 wendy street, off accra hotel mall, Ghana'
        },
        {
         title:'Phone number',
           discription:'+233 234 456 568'
        },
        {
           title:'Email Address',
           discription:'Andykwame@gmail.com'
        },
    ]



  return (
    <div className='w-full'>
    <ul className='[&>*]:py-4'>
       {userAccountDetails?.map((item,idx)=><li key={idx} className='flex border-b border-neutral-100 items-end justify-between'>
            <div className='space-y-2'>
            <div className='text-[#3D3D3D]'>{item.title}</div>
            <p className='text-[#7A7A7A] text-sm'>{item.discription}</p>
            </div>
            <button className='text-[#0130C7] underline pb-1 cursor-pointer' onClick={()=>{}}>Edit</button>
        </li>)}
    </ul>
      </div>
  )
}

export default page
