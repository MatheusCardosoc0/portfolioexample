import React, { ReactNode } from 'react'
import { globalElementsProps } from '../../@types/interfaces/BasicInterfaceForGlobalElements'

interface ParagrapHProps extends globalElementsProps {}

function P({children, stylish}: ParagrapHProps) {
  return (
    <p className={`text-white md:text-xl font-medium ${stylish}`}>
      {children}
    </p>
  )
}

export default P