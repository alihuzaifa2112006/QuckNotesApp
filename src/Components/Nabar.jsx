import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSettings, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-black text-white flex items-center justify-between p-4 md:p-6 lg:p-12 h-[12vh]'>
      <div className='flex items-center'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold flex select-none'>
          QuickNotes | <img src="/Images/navlogo.png" alt="" className='w-8 md:w-10 lg:w-12 ml-1' />
        </h1>
      </div>

     
      <ul className='hidden lg:flex items-center gap-6 xl:gap-12'>
        <Link to="/" className='hover:text-purple-300 transition'>Home</Link>
        <Link to="/notes" className='hover:text-purple-300 transition'>Saved Notes</Link>
        <Link to="/profile" className='hover:text-purple-300 transition'>Profile</Link>
        <Link to="/setting">
          <button type="button" className="text-white flex items-center gap-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 text-center cursor-pointer">
            Settings <IoSettings size={15} />
          </button>
        </Link>
      </ul>

      
      <div className='lg:hidden'>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-white focus:outline-none'
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>


      <div className={`
        lg:hidden fixed top-[12vh] left-0 right-0 bg-black z-50 p-6 shadow-lg
        transition-all duration-300 ease-in-out overflow-hidden
        ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <ul className='flex flex-col items-center gap-6 pb-4'>
          <Link 
            to="/" 
            className='hover:text-purple-300 transition text-lg w-full text-center py-2'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/notes" 
            className='hover:text-purple-300 transition text-lg w-full text-center py-2'
            onClick={() => setIsMenuOpen(false)}
          >
            Saved Notes
          </Link>
          <Link 
            to="/profile" 
            className='hover:text-purple-300 transition text-lg w-full text-center py-2'
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <Link 
            to="/setting"
            onClick={() => setIsMenuOpen(false)}
            className='w-full flex justify-center'
          >
            <button 
              type="button" 
              className="text-white flex items-center gap-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
            >
              Settings <IoSettings size={15} />
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;