import React from 'react'
import { P, Title } from '../../GlobalElements'
import { certificatedProps } from './@types/CertificatedType'

const CardCertificated = ({certificated}: {certificated: certificatedProps}) => {
  return (
    <div className='bg-[#989696] rounded-xl p-3 overflow-hidden w-[300px]'>
      <div className='  bg-[#757272] text-center overflow-hidden rounded-xl p-1 max-h-[500px] flex flex-col items-center'>
        <Title.H3>
          {certificated.title}
        </Title.H3>

        <img src={certificated.banner} />

        <P stylish='md:text-base'
        limit={100}>
          {certificated.description}
        </P>
      </div>
    </div>
  )
}

export default CardCertificated