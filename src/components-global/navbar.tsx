import { Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex w-screen'>
      <div 
        style={{
          height:'80px',
          backgroundColor:'teal',
          color:'white',
          width:'100vw',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'20px'
        }}
      >
        <Link href='/'>Home</Link>
        <Link href='/students/new'>Create</Link>
        <Link>Edit</Link>
      </div>
    </nav>
  )
}

export default Navbar