import React, { useEffect, useState } from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Student } from '@/helper/types'
import axios from 'axios'
import StudentCard from './components-local/student-card'
import Layout from '@/components-global/layout'


const Students = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const getAllStudents = async () => {
    const res: any = await axios('/api/students')
    if (!res.error && !res.data.error) {
      setStudents(prv => res.data.data)
      setError(false)
      setErrorMessage('')
    } else {
      setError(true)
      setErrorMessage(res.data.message)
    }
  }
  useEffect(() => {
    if (students.length < 1) {
      getAllStudents()
    }
  }, [])

  return (
      <div className='flex flex-col gap-10 p-10 w-screen'>
        <div className='flex text-3xl font-bold w-full justify-center'>
          <span>
            Students
          </span>
        </div>
        <div className='flex gap-5'>
          {Array.isArray(students) && students.map(el => (
            <StudentCard data={el} key={el.id} />
          ))}
          {error && <li>{errorMessage}</li>}
        </div>
      </div>
  )
}

export default Students