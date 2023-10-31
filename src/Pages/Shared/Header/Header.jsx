// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../../assets/logo.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'

const Header = () => {
return (
<div>
  <header aria-label="Site Header" className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <img src={logo} alt="" className='h-12' />
          </a>
        </div>

        <div className="hidden md:block">
          <nav aria-label="Site Nav">
            <ul className="flex items-center gap-6 text-sm">
            <li>
                <a className="text-gray-500 transition hover:text-teal-600" href="/">
                  Home
                </a>
              </li>
              
              <li>
                <a className="text-gray-500 transition hover:text-teal-600" href="/">
                  About
                </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-teal-600" href="/">
                  Services
                </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-teal-600" href="/">
                  Blog
                </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-teal-600" href="/">
                  Contact
                </a>
              </li>

        

              {/* <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                  Blog
                </a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4"> 
        <div className="sm:flex sm:gap-4">
            <a className="text-2xl text-gray-500 transition hover:text-teal-600" href="/">
              <BsCartCheck/>
            </a>
          </div>
          <div className="sm:flex sm:gap-4">
            <a className="text-2xl text-gray-500 transition hover:text-teal-600" href="/">
              <AiOutlineSearch />
            </a>
          </div>
         
         
            <div className="sm:flex sm:gap-4">
              <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="/">
                Login
              </a>

              <div className="hidden sm:flex">
                <a className="rounded-md px-5 py-2.5 text-sm font-medium text-teal-600 border-spacing-2 border border-teal-600 hover:bg-teal-600 hover:text-white transition"
                  href="/">
                  Appointment
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
  </header>
</div>
)
}

export default Header