import { Input } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

type Props={
    name:string
    type?: string
    step?:string
    onChange?:(e:any)=>void
    placeholder?:string
    defaultValue?: string 
    buttonType?: 'button' | 'submit' | 'reset'
}

const CustomInput = forwardRef<HTMLInputElement, Props>(
    ({name,type,buttonType,step,defaultValue,onChange, ...props},
    ref
) => {
  return (
    <Input
        ref={ref}
        step={step}
        className='w-full border border-gray-300 rounded-md h-16 relative z-30'
        type={type ? type : 'text'}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        required
        {...props}
    />
  )
})

export default CustomInput