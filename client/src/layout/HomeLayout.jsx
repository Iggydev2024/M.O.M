import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
