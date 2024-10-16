import CustomInput from '@/components-global/form-elements/custom-input'
import { Student } from '@/helper/types'
import React, { forwardRef } from 'react'

const AddStudentForm = ({onSubmit,loading,data,buttonText}:{onSubmit:any,loading?:boolean,data?:Student,buttonText?:string},ref:any) => {
    return (
        <form className='flex flex-col gap-5' onSubmit={onSubmit} ref={ref}>
            <div className='flex columns-1 md:columns-2 gap-5 h-full w-full relative'>
                <div className='flex relative flex-col w-full gap-1'>
                    <label htmlFor="name">
                        Students Full Name
                    </label>
                    <CustomInput name="name" defaultValue={data?.name} />
                </div>
                <div className='flex relative flex-col w-full gap-1'>
                    <label htmlFor="name">
                        Major
                    </label>
                    <CustomInput name="major" defaultValue={data?.major} />
                </div>
            </div>

            <div className='flex columns-1 md:columns-2 gap-5 h-full w-full relative'>
                <div className='flex relative flex-col w-full gap-1'>
                    <label htmlFor="regnum">
                        Registration Number
                    </label>
                    <CustomInput name="regnum" defaultValue={data?.registrationNumber} />
                </div>
                <div className='flex relative flex-col w-full gap-1'>
                    <label htmlFor="dob">
                        Date of Birth
                    </label>
                    <CustomInput type="date" name="dob" defaultValue={data?.dob}  />
                </div>
            </div>

            <div className='flex columns-1 md:columns-2 gap-5 h-full w-full relative'>
                <div className='flex relative flex-col w-1/2 gap-1'>
                    <label htmlFor="gpaRef">
                        G.P.A
                    </label>
                    <CustomInput type='number' step="0.01" name="gpa" defaultValue={data?.gpa.toString()}  />
                </div>
            </div>

            <div>
                <button type='submit' disabled={loading} className='bg-blue-500 rounded p-2 text-white' >
                    <span>
                        {buttonText ? buttonText : "Add Student"}
                    </span>
                    {loading && <span className=' animate-pulse'>...</span>}
                </button>
            </div>
        </form>
    )
}

export default forwardRef(AddStudentForm)