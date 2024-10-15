import Navbar from './navbar'
import Footer from './footer'
import React from 'react'

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div style={{display:'flex',flexDirection:'column',minHeight:'100vh',overflowY:'scroll',width:'100vw'}}>
      <Navbar />
      <main style={{display:'flex',flex:1}}>
        {children}
      </main>
      <Footer />
    </div>
  )
}