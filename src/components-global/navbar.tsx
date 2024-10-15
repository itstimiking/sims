import { Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex w-screen'>
      <div className='flex gap-5 w-full h-20 justify-center items-center'>
        <Link href='/'>Home</Link>
        <Link href='/students/new'>Create</Link>
        <Link>Edit</Link>
      </div>
    </nav>
  )
}

export default Navbar