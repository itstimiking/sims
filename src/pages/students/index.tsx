import React, { useEffect, useState } from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Student } from '@/helper/types'
import axios from 'axios'
import StudentCard from './components-local/student-card'
import Layout from '@/components-global/layout'
import CustomInput from '@/components-global/form-elements/custom-input'


const Students = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [data, setData] = useState<Student[]>([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSearch = (queryString:any)=>{
    setData(students.filter(el=>el.name.toLowerCase().includes(queryString?.target.value.toLowerCase())))
  }

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

  useEffect(() => {
    setData(students)
  }, [students])

  return (
    <div className='flex flex-col gap-10 p-10 w-screen'>
      <div className='flex text-3xl font-bold w-full justify-center'>
        <span>
          Students Information Management Systems (SIMS)
        </span>
      </div>
      <div className='flex justify-center'>
        <div className='flex w-1/2 justify-center'>
          <CustomInput name='search' type='search' onChange={handleSearch} placeholder='Search Student Name' />
        </div>
      </div>
      <div className='flex w-screen justify-center'>
        <div className='flex w-[90%] flex-wrap'>
          {Array.isArray(data) && data.map(el => (
            <StudentCard data={el} key={el?.id} />
          ))}
          {error && <li>{errorMessage}</li>}
        </div>
      </div>
    </div>
  )
}

export default Students