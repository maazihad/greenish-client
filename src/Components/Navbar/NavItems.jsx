import { NavLink } from 'react-router-dom';

const NavItems = () => {
  return (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-primaryBlue text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-primaryBlue hover:text-white`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive, isPending }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-primaryBlue text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-primaryBlue hover:text-white`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/services'
          className={({ isActive, isPending }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-primaryBlue text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-primaryBlue hover:text-white`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contact'
          className={({ isActive, isPending }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-primaryBlue text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-primaryBlue hover:text-white`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
