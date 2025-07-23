'use client'

import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full bg-gray-900 text-white font-medium py-4 px-6 shadow-lg z-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold text-blue-400'>Yonadhan MM</div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8'>
          <li>
            <a
              href='#about'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#education'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Education
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href='#resume'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden mt-4 pb-4'>
          <ul className='flex flex-col space-y-2'>
            <li>
              <a
                href='#about'
                className='block py-2 hover:text-blue-400 transition-colors duration-300'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='block py-2 hover:text-blue-400 transition-colors duration-300'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='block py-2 hover:text-blue-400 transition-colors duration-300'
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#education'
                className='block py-2 hover:text-blue-400 transition-colors duration-300'
              >
                Education
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='block py-2 hover:text-blue-400 transition-colors duration-300'
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href='#resume'
                className='block py-2 hover:text-blue-400 transition-colors duration-300'
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
