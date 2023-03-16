import React, { ReactNode } from 'react'
import { globalElementsProps } from '../../@types/interfaces/BasicInterfaceForGlobalElements'

interface ParagrapHProps extends globalElementsProps {
  limit?: number
}

function P({ children, stylish, limit = 1000 }: ParagrapHProps) {

  const excedText = String(children).length > limit;
  const reduceText = String(children).substring(0, limit)

  return (
    <p className={`text-white md:text-xl font-medium ${stylish}`}>
      {excedText ? (
        <>
          {reduceText}... <a>Leia mais</a>
        </>
      ) : (
        children
      )}
    </p>
  )
}

export default P