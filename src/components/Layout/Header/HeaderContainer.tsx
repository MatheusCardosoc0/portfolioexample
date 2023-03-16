import React from 'react'
import Navbar from './Navbar'
import PersonContent from './PersonContent'

const HeaderContainer = () => {
  return (
    <header className={`bg-[#808080]`}>
      <Navbar />
      <PersonContent />
    </header>
  )
}

export default HeaderContainer