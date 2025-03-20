import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
    <ul className='[&>*]:py-4'>
        <li>
            <div className='space-y-2'>
            <div className='text-[#3D3D3D]'>Personal Details</div>
            <p className='text-[#7A7A7A] text-sm'> Manage your personal details like name, contact and address</p>
            </div>
        </li>
        <li>
            <div className='space-y-2'>
        <div className='#3D3D3D'>Name and Address</div>
        <p className='text-[#7A7A7A] text-sm'>John Kwame, 32 wendy street, off accra hotel mall, Ghana</p>
            </div>
        </li>
        <li>
            <div className='space-y-2'>
        <div className='#3D3D3D'>Phone number</div>
        <p className='text-[#7A7A7A] text-sm'>+233 234 456 568</p>
            </div>
        </li>
        <li>
            <div className='space-y-2'>
        <div className='#3D3D3D'>Email Address</div>
        <p className='text-[#7A7A7A] text-sm'>Andykwame@gmail.com</p>
            </div>
        </li>
    </ul>
      </div>
  )
}

export default page
