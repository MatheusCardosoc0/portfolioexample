import React from 'react'
import { Title } from '../../GlobalElements'

const Video = () => {
  return (
    <div className='bg-cover h-[700px] w-full flex justify-center items-center flex-col gap-20 border-t-[20px] border-[#c9c6c6]'
      style={{
        backgroundImage: 'url(justiceBackground.png)'
      }}>
        <Title.H3 stylish='text-xl md:text-3xl font-bold text-white drop-shadow-[0px_0px_3px_black]'>
          Video de apresentação
        </Title.H3>
        <video src='/video.mov' controls
        className='w-[700px] rounded-xl border-4 border-[#f3ad16] ' />
      </div>
  )
}

export default Video