import React from 'react'

const Navbar = () => {

  const shortcuts: string[] = ["Sobre", "Trabalhos", "Contatos"]

  return (
    <nav className='w-full md:w-[50%] py-2 px-1 relative md:left-[50%] border-b-4'>
      <ul className='flex gap-2 justify-end'>
        {shortcuts.map((shortcut, i) => (
          <li key={i}
            className="text-2xl font-bold">
            <a className='mr-2 text-white drop-shadow-[1px_3px_1px_black]  cursor-pointer'>
              {shortcut}
            </a>|
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar