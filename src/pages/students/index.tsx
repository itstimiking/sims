import React, { useEffect, useState } from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Student } from '@/helper/types'
import axios from 'axios'
import StudentCard from './components-local/student-card'


const Students = () => {
  const [students,setStudents] = useState<Student[]>()
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')

  const getAllStudents = async()=>{
    const res:any = await axios('/api/students')
    if(!res.error && !res.data.error){
      setStudents(prv=>res.data.data)
      setError(false)
      setErrorMessage('')
    }else{
      setError(true)
      setErrorMessage(res.data.message)
    }
  }
  useEffect(()=>{
    if(!students){
      getAllStudents()
    }
  },[])

  return (
    <div className='flex flex-col gap-10 p-10'>
      <div className='text-3xl font-bold'>
        Students
      </div>
      <div className='flex gap-5'>
        {students && students.map(el=>(
          <StudentCard data={el} key={el.id} />
        ))}
        {error && <li>{errorMessage}</li>}
      </div>
    </div>
  )
}

export default Students