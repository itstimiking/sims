import CustomInput from '@/components-global/form-elements/custom-input'
import { Student } from '@/helper/types'
import { Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const New = () => {
    const nameRef:any = useRef()
    const majorRef:any = useRef()
    const regNumRef:any = useRef()
    const dobRef:any = useRef()
    const gpaRef:any = useRef()
    const formRef:any = useRef()

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(false)

    const addStudent = async (e: any) => {
        e.preventDefault()
        if([
            nameRef, majorRef, regNumRef,dobRef,gpaRef
        ].every(el=>el.current.value)){
            setLoading(true)
        const res = await axios({
            url: '/api/students',
            method: 'POST',
            data: {
                name: nameRef.current?.value,
                dob: dobRef.current?.value,
                registrationNumber: regNumRef.current?.value,
                major: majorRef.current?.value,
                gpa: parseFloat(gpaRef.current?.value)
            }
        })
        console.log(res.data, ":::: post response :::::")
        if(!res.data.error){
            setMessage(res.data.message)
        }else{
            setError(true)
            setMessage(res.data.message)
        }
        
        if(formRef){
            formRef?.current.reset()
        }

        setLoading(false)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setError(false)
            setMessage(false)
        },3000)
    },[message])

    return (
        <div className='flex justify-center items-center pt-20 relative z-0'>
            <div
                className={
                    `w-11/12 sm:w-10/12 md:3/5 min-h-96 relative z-10
                shadow-lg border border-gray-200 rounded-lg p-5 md:p-10`
                }
            >
                <div>
                    {error && 
                    <span className='text-red-500'>
                        {message}
                    </span>}

                    {!error && message && 
                    <span className='text-green-500'>
                        {message}
                    </span>}
                </div>
                <form className='flex flex-col gap-5' onSubmit={addStudent} ref={formRef}>
                    <div className='flex columns-1 md:columns-2 gap-5 h-full w-full relative'>
                        <div className='flex relative flex-col w-full gap-1'>
                            <label htmlFor="name">
                                Students Full Name
                            </label>
                            <CustomInput name="name" ref={nameRef} />
                        </div>
                        <div className='flex relative flex-col w-full gap-1'>
                            <label htmlFor="name">
                                Major
                            </label>
                            <CustomInput name="major" ref={majorRef} />
                        </div>
                    </div>

                    <div className='flex columns-1 md:columns-2 gap-5 h-full w-full relative'>
                        <div className='flex relative flex-col w-full gap-1'>
                            <label htmlFor="regnum">
                                Registration Number
                            </label>
                            <CustomInput name="regnum" ref={regNumRef} />
                        </div>
                        <div className='flex relative flex-col w-full gap-1'>
                            <label htmlFor="dob">
                                Date of Birth
                            </label>
                            <CustomInput type="date" name="major" ref={dobRef} />
                        </div>
                    </div>

                    <div className='flex columns-1 md:columns-2 gap-5 h-full w-full relative'>
                        <div className='flex relative flex-col w-1/2 gap-1'>
                            <label htmlFor="gpaRef">
                                G.P.A
                            </label>
                            <CustomInput type='number' step="0.01" name="gpaRef" ref={gpaRef} />
                        </div>
                    </div>

                    <div>
                        <button type='submit' disabled={loading} className='bg-blue-500 rounded p-2 text-white' >
                            <span>
                                Add Student
                            </span>
                            {loading && <span className=' animate-pulse'>...</span>}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default New