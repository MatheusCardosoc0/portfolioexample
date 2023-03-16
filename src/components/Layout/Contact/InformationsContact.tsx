import React from 'react'
import { Title } from '../../GlobalElements'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const InformationsContact = () => {
  return (
    <div>
      <Title.H2>
        Contato
      </Title.H2>
      <div className='w-full bg-gradient-to-tr from-[#b7abab] to-[#4a4a4a] p-12'>
        <h4 className='text-center text-lg text-white'>
          Este é um exemplo de site apenas, entre em contato conosco para ter mais detalhes.
        </h4>
        <a className='cursor-pointer' href='https://wa.me/35765179'>
          <AiOutlineWhatsApp className='mx-auto text-6xl text-[#25cd12] bg-white rounded-full' />
        </a>
      </div>
    </div>
  )
}

export default InformationsContact
