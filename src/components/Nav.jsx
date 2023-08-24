import { headerLogo } from '../assets/images'
import { close, hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Options = ({styles}) => {
  return (
    <>
      {
        navLinks.map((item) => (
          <li key={item.lable} className={styles}>
            <a
              href={item.href}
              className='font-montserrat leading-normal text-lg'
            >
              {item.label}
            </a>
          </li>
        ))
      }
    </>
  )
}

const Nav = () => {

  let [menu, toggleMenu] = useState(false)

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <Options />
        </ul>
        <div className='hidden max-lg:block relative'>
          {
            menu

              ? <img
                src={close}
                alt="close"
                width={25}
                height={25}
                onClick={() => { toggleMenu(!menu) }}
              />

              : <img
                src={hamburger}
                alt="hamburger"
                width={25}
                height={25}
                onClick={() => { toggleMenu(!menu) }}
              />
          }
          {
            menu && (
              <div className='flex flex-col  absolute top-8 right-0 bg-gray-800 animate-fade-left animate-once animate-ease-in-out w-40'>
                <ul className='list-none'>
                  <Options styles="w-full text-center py-4 hover:bg-slate-700 text-white"/>
                </ul>
              </div>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Nav