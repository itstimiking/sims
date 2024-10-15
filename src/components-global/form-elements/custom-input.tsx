import { Input } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

type Props={
    name:string
    type?: string
    step?:string
    buttonType?: 'button' | 'submit' | 'reset'
}

const CustomInput = forwardRef<HTMLInputElement, Props>(
    ({name,type,buttonType,step, ...props},
    ref
) => {
  return (
    <Input
        ref={ref}
        step={step}
        className='w-full border border-gray-300 rounded-md h-16 relative z-30'
        type={type ? type : 'text'}
        name={name}
        required
        {...props}
    />
  )
})

export default CustomInput