import { useState, useEffect } from 'react'
import Logo from '../assets/M_O_M_logo.png'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = "relative inline-block transition-colors duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"

  return (
    <nav className={`sticky top-0 z-50 bg-[#0b3625] text-white shadow-md transition-all duration-300 ease-in-out ${scrolled ? 'py-1' : 'py-3'}`}>
      <div className='flex md:grid md:grid-cols-3 items-center justify-between px-4'>
        <div className='text-xl font-bold'>
          <img
            src={Logo}
            alt="M.O.M Logo"
            className={`w-auto border border-white rounded-full transition-all duration-300 ease-in-out ${scrolled ? 'h-10' : 'h-20'}`}
          />
        </div>

        <div className='hidden md:flex justify-center space-x-8 text-lg font-medium'>
          <a href="#" className={linkClass}>Home</a>
          <a href="#" className={linkClass}>About</a>
          <a href="#" className={linkClass}>Events</a>
          <a href="#" className={linkClass}>Blog</a>
        </div>

        <div className='hidden md:block justify-self-end text-md font-semibold bg-white text-[#0b3625] rounded-xl p-2 hover:bg-[#0b3625] hover:border hover:border-white hover:text-gray-200 cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:scale-110 active:scale-95'>Get Involved</div>

        <button
          className={`md:hidden text-2xl focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 duration-500' : 'max-h-0 opacity-0 duration-300'
        }`}
      >
        <div className='flex flex-col items-center space-y-4 pb-4 border-t border-white/20 pt-4'>
          <a href="#" className={linkClass}>Home</a>
          <a href="#" className={linkClass}>About</a>
          <a href="#" className={linkClass}>Events</a>
          <a href="#" className={linkClass}>Blog</a>
          <a href="#" className={linkClass}>Contact</a>
          <div className='text-md font-semibold bg-white text-[#0b3625] rounded-xl p-2 hover:bg-gray-600 hover:text-gray-200 cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:scale-110 active:scale-95'>Get Involved</div>
        </div>
      </div>
    </nav>
  )
}
