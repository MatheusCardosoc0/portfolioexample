import React from 'react'
import { P, Title } from '../../GlobalElements'
import { textAbout } from './utils/TextAbout'


const EstructureText = ({text}: {text: string}) => {
  return (
    <P stylish='text-justify drop-shadow-[0px_0px_2px_black] font-semibold'>
      {text}
    </P>
  )
}

const AboutMe = () => {
  return (
    <section className='flex justify-center w-full bg-gradient-to-t from-[#878686] to-[#4c4646] py-12 border-t-[20px] border-[#7d7c7c]'>
      <div className='max-w-[600px] px-2 flex justify-center flex-col items-center gap-20'>
        <Title.H3 stylish='text-xl md:text-3xl font-bold text-white drop-shadow-[0px_2px_2px_black]'>
          Sobre mim
        </Title.H3>

        <div className='flex flex-col gap-4'>
          {textAbout.map(paragraph => (<EstructureText text={paragraph} />))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe