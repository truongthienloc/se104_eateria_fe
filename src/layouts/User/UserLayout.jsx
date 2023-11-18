import React from 'react'
import {User_Sidebar} from '../../components/User_Sidebar'
import { Outlet } from 'react-router-dom'

export const UserLayout = () => {
  return (
        <div className='flex gap-10 bg-third'>
        <User_Sidebar />
        <Outlet />
        </div>
  )
}
