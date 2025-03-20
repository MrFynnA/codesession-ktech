'use server'

import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  return redirect('/account-settings/personal-details')
}

export default page
