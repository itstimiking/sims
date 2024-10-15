import { studentsDb } from '@/helper/students-data'
import { Student } from '@/helper/types'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Details = ({student}:{student:Student}) => {
  const [data,setData] = useState<Student>()

  useEffect(()=>{
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

export async function getServerSideProps(context:any) {
  const id = context.params.id
  const student = studentsDb.getById(id.toString())
  console.log(student,"::::::::: student data :::::::::::::::")
  return {
    props: {
      student: student ? student : null,
    }
  }
}