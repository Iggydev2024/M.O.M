export default function Footer() {
  const linkClass = "relative inline-block transition-colors duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"

  return (
    <footer className='bg-[#0b3625] text-white px-6 py-8'>
      <div className='flex flex-col md:flex-row md:justify-between items-center gap-6 max-w-6xl mx-auto'>
        <div className='flex flex-wrap justify-center gap-6 text-base font-medium'>
          <a href="#" className={linkClass}>Home</a>
          <a href="#" className={linkClass}>About</a>
          <a href="#" className={linkClass}>Events</a>
          <a href="#" className={linkClass}>Blog</a>
          <a href="#" className={linkClass}>Contact</a>
        </div>

        <p className='text-sm text-gray-300'>
          &copy; {new Date().getFullYear()} <span className='font-semibold text-white'>Mind Over Matter</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
