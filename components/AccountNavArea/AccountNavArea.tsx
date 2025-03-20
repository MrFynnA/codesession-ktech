import Link from 'next/link'
import React from 'react'

const UserNavArea = () => {
  return (
    <div className='flex h-[50px] items-center justify-between [&>*]:rounded-md [&>*]:p-2 [&>*]:bg-white [&>*]:text-neutral-500 bg-neutral-100 rounded-lg p-1'>
      <Link href={'/account-settings/personal-details'}>
        Personal Details
      </Link>
      <Link href={'/account-settings/notification-managment'}>
        Notification Managment
      </Link>
      <Link href={'/account-settings/help'}>
        Help & Support 
      </Link>
    </div>
  )
}

export default UserNavArea
