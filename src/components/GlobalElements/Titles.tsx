import React, { ReactNode } from 'react'
import { globalElementsProps } from '../../@types/interfaces/BasicInterfaceForGlobalElements'

interface titleProps extends globalElementsProps {}

const H1 = ({children, stylish}: titleProps) => {
  return (
    <h1 className={`text-4xl text-white font-bold`}>
      {children}
    </h1>
  )
}

const H2 = ({children, stylish}: titleProps) => {
  return (
    <h2 className='w-full text-center text-3xl font-bold py-4 bg-[#646464] border-t-[20px] border-[#a1a1a1] shadow-[1px_4px_4px_black] text-white'>
      {children}
    </h2>
  )
}

const H3 = ({children, stylish}: titleProps) => {
  return (
    <h2 className={`text-xl font-[500] ${stylish}`}>
      {children}
    </h2>
  )
}

export default {H1, H2, H3}