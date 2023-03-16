import React from 'react'
import { P, Title } from '../../GlobalElements'

const PersonContent = () => {
  return (
    <div className='w-full flex justify-around'>
      <img src='/person.png'
        className='max-w-[600px]' />

      <div className='max-w-[500px] justify-center items-center flex flex-col gap-8 text-center p-2'>
        <Title.H1>
          Paulo Advogado
        </Title.H1>
        <P stylish=''>
          Advogado com 20 anos de experiência e aprovação na OAB. Ofereço soluções jurídicas confiáveis e de qualidade, priorizando sempre os interesses dos clientes.
        </P>
      </div>
    </div>
  )
}

export default PersonContent