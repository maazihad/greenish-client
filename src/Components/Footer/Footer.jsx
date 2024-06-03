import { Link } from 'react-router-dom';
import logo from '../../assets/logo//greenish.png';

const Footer = () => {
  return (
    <footer className='bg-green-800 text-white py-6 '>
      <div className='container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <img src={logo} alt='Greenish Logo' className='w-40' />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <Link to='/' className='text-white mx-2 hover:text-green-500'>
            Home
          </Link>
          <Link to='/shop' className='text-white mx-2 hover:text-green-500'>
            Shop
          </Link>
          <Link to='/about' className='text-white mx-2 hover:text-green-500'>
            About Us
          </Link>
          <Link to='/contact' className='text-white mx-2 hover:text-green-500'>
            Contact
          </Link>
        </div>
        <div className='mt-4 md:mt-0 text-center md:text-right'>
          <p className='text-sm'>
            &copy; 2024 Greenish Bazaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
