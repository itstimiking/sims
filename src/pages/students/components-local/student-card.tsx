import { Student } from '@/helper/types'
import React from 'react'

type Props = {
    data: Student
}
const StudentCard: React.FC<Props> = ({data}) => {
  return (
    <div className='w-1/4 h-60 border rounded-lg shadow-lg border-gray-200 p-5 items-end'>

        <div className='flex flex-col'>
            <span className='text-lg font-semibold'>Name: {data.name}</span>
            <span className='font-light'>Major: {data.major}</span>
            <span className='text-xs font-light'>Reg Num: {data.registrationNumber}</span>
        </div>

    </div>
  )
}

export default StudentCard