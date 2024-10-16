import { Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex w-screen'>
      <div
        style={{
          height: '80px',
          backgroundColor: 'teal',
          color: 'white',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          padding:'0px 10%'
        }}
      >
        <Link href='/'>Home</Link>

        <Link href='/students/new'>
          <button
            style={{
              border: "1px solid white",
              borderRadius: '10px',
              padding: '5px',
              alignSelf:'end',
              width:'150px'
            }}
          >
            Add Student
          </button>
        </Link>

      </div>


    </nav>
  )
}

export default Navbar