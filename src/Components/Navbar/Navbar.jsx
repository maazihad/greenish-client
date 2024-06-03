import { useState } from 'react';
import NavItems from './NavItems';
import logo from '../../assets/greenishLightsquare.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-primaryGreen'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-primaryBlue hover:text-white hover:bg-primaryBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>

          <div className='flex-1 flex items-center justify-center sm:justify-start'>
            <img
              className='w-24 flex-shrink-0 text-white text-xl'
              src={logo}
              alt=''
            />

            <div className='hidden sm:block sm:ml-6'>
              <ul className='flex space-x-4 '>
                <NavItems></NavItems>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        id='mobile-menu'
      >
        <ul className='px-2 pt-2 pb-3 space-y-1'>
          <NavItems></NavItems>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
