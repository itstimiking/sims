import Navbar from './navbar'
import Footer from './footer'
import React from 'react'

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className='flex w-full flex-col h-screen'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}