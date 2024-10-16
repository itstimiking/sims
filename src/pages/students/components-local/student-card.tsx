import { Student } from '@/helper/types'
import { Link } from '@chakra-ui/react'
import React from 'react'

type Props = {
    data: Student
}
const StudentCard: React.FC<Props> = ({data}) => {
  return (
    <div className='flex w-full sm:w-1/2 md:w-3/4 lg:w-1/4 border rounded-lg shadow-lg border-gray-200 p-5'>
        <div className='flex flex-col flex-1'>
            <Link color={'blue.500'} href={`/students/${data?.id}`}>
              <span className='text-lg font-semibold'>Name: {data?.name}</span>
            </Link>
            <span className='font-light'>Major: {data?.major}</span>
            <span className='text-xs font-light'>Reg Num: {data?.registrationNumber}</span>
        </div>

    </div>
  )
}

export default StudentCard