import { studentsDb } from '@/helper/students-data'
import { Student } from '@/helper/types'
import { Link } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Details = ({ student }: { student: Student }) => {
  const [data, setData] = useState<Student>()

  useEffect(() => {
    if (student) {
      setData(student)
    }
  }, [student])
  return (
    <div className='flex flex-col gap-5 w-screen justify-center items-center'>
      <div className='flex justify-between min-w-40'>
        Student Details
      </div>

      <div
        className={
          `
              w-11/12 sm:w-10/12 md:3/5 min-h-96 relative z-10
              shadow-lg border border-gray-200 rounded-lg p-5 md:p-10
              `
        }
      >
        <div className='w-full flex justify-between justify-self-end'>
          <Link href={`/students/${data?.id}/edit`}>
          <button type='submit' className='bg-blue-500 rounded p-2 text-white' >
            <span>
              Edit
            </span>
          </button>
          </Link>

          <button type='submit' className='bg-red-500 rounded p-2 text-white' >
            <span>
              Delete
            </span>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Details

export async function getServerSideProps(context: any) {
  const id = context.params.id
  const student = studentsDb.getById(id.toString())
  console.log(student, "::::::::: student data :::::::::::::::")
  return {
    props: {
      student: student ? student : null,
    }
  }
}