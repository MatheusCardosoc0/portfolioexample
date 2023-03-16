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
    <div>H2</div>
  )
}

const H3 = ({children, stylish}: titleProps) => {
  return (
    <div>H3</div>
  )
}

export default {H1, H2, H3}