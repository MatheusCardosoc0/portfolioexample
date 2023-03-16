import React from 'react'
import { Title } from '../../GlobalElements'
import { certificatedProps } from './@types/CertificatedType'
import AboutMe from './AboutMe'
import CardCertificated from './CardCertificated'



const certificateds: certificatedProps[] = [
  {
    banner: 'exampleCertificated.png',
    title: 'Certificação em Direito Empresarial',
    description: 'Me especializei em Direito Empresarial após anos de experiência trabalhando com empresas em diversas áreas do mercado.'
  },
  {
    banner: 'exampleCertificated.png',
    title: 'Certificação em Direito Penal',
    description: 'Com anos de prática em casos criminais e defesa penal, me aprofundei no Direito Penal, buscando constantemente atualização e aprimoramento em minhas técnicas.'
  },
  {
    banner: 'exampleCertificated.png',
    title: 'Certificação em Mediação e Resolução de Conflitos',
    description: 'Acreditando que a solução de conflitos é uma das principais funções do advogado, busquei especialização em Mediação e Resolução de Conflitos para oferecer um serviço mais completo e satisfatório aos meus clientes.'
  },
]

const AboutContainer = () => {
  return (
    <section className='w-full flex flex-col'>
      <Title.H2>
        Certificações
      </Title.H2>
      <div className='flex gap-4 p-4 drop-shadow-[1px_4px_4px_black] justify-center'>
        {certificateds.map((certificated, i) => (
          <CardCertificated key={i}
            certificated={certificated} />
        ))}
      </div>
      <AboutMe />

    </section>
  )
}

export default AboutContainer