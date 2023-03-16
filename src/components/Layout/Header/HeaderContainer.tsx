import React from 'react'
import { theme } from '../../../utils/theme'
import Navbar from './Navbar'
import PersonContent from './PersonContent'

const HeaderContainer = () => {
  return (
    <header className={`bg-[${theme.color.primaryColor}]`}>
      <Navbar />
      <PersonContent />
    </header>
  )
}

export default HeaderContainer