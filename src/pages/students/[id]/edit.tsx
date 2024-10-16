import React, { useEffect, useRef, useState } from 'react'
import AddStudentForm from '../components-local/add-student-form'
import axios from 'axios'
import { studentsDb } from '@/helper/students-data'
import { Student } from '@/helper/types'

const Edit = ({ student }: { student: Student }) => {
  const formRef: any = useRef()

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(false)
  const [error, setError] = useState(false)

  const [data, setData] = useState<Student>()

  const editStudent = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.target));
    if (Object.values(data).every(el => el)) {
      setLoading(true)
      try {
        const res = await axios({
          url: '/api/students/'+ student.id,
          method: 'PUT',
          data: { ...data, gpa: parseFloat(data.gpa as string) }
        })
        console.log(res.data, ":::: post response :::::")
        if (!res.data.error) {
          setMessage(res.data.message)
          if (formRef) {
            formRef?.current.reset()
          }
        } else {
          setError(true)
          setMessage(res.data.message)
        }
      } catch (err: any) {
        console.log(err, ":::: error ::::")
        setError(true)
        setMessage(err?.message)
      }

      setLoading(false)
    }
  }

  useEffect(() => {
    const time = setTimeout(() => {
      setError(false)
      setMessage(false)
    }, 5000)
    return () => clearTimeout(time)
  }, [message])

  useEffect(() => {
    if (student) {
      setData(student)
    }
  }, [student])

  return (
    <div className='flex flex-col justify-center items-center relative z-0 w-screen'>
      <div className='w-11/12 sm:w-10/12 md:3/5'>
        <span>
          Edit student information
        </span>
      </div>
      <div className='flex min-w-60 h-10'>
        {error &&
          <span className='text-red-500'>
            {message}
          </span>
        }

        {!error && message &&
          <span className='text-green-500'>
            {message}
          </span>
        }
      </div>
      <div
        className={
          `
                    w-11/12 sm:w-10/12 md:3/5 min-h-96 relative z-10
                    shadow-lg border border-gray-200 rounded-lg p-5 md:p-10
                    `
        }
      >

        <AddStudentForm 
          onSubmit={editStudent} 
          loading={loading} 
          ref={formRef} 
          data={student}
          buttonText='Update Information'
        />

      </div>
    </div>
  )
}

export default Edit


export async function getServerSideProps(context: any) {
  const id = context.params.id
  const student = studentsDb.getById(id.toString())
  return {
    props: {
      student: student ? student : null,
    }
  }
}