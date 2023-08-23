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
              className='font-montserrat leading-normal text-lg text-slate-gray'
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
              <div className='flex flex-col  absolute top-8 right-0 bg-slate-600'>
                <ul className='list-none'>
                  <Options styles="w-[120px] text-center py-2 hover:bg-slate-500 text-white"/>
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