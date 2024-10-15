import { studentsDb } from '@/helper/students-data'
import { Student } from '@/helper/types'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Details = ({student}:{student:Student}) => {
  const [data,setData] = useState<Student>()

  useEffect(()=>{
    console.log(student,"::::::::; student data ::::::")
    if(student){
      setData(student)
    }
  },[student])
  return (
    <div> 
      Student details
      {
        data && (
          <div className='flex flex-col gap-10'>
            <span className='text-2xl font-bold'>
              {data.name}
            </span>
            <span className=''>
              {data.major}
            </span>
            <span>
              {data.registrationNumber}
            </span>
            <span>
              {data.gpa}
            </span>
            <span>
              {data.dob}
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Details

export async function getStaticProps(context:any) {
  const id = context.params.id
  const student = studentsDb.getById(id)


 
  return {
    props: {
      student,
    },
    revalidate: 10, // In seconds
  }
}


export async function getStaticPaths() {
  const students = studentsDb.getAll()
  const paths = students.map((student) => ({
    params: { id: student.id },
  }))

  return { paths, fallback: 'blocking' }
}