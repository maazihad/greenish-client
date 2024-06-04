import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const NavItems = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success(`Successfully logged out!`))
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-green-800 text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-green-800 hover:text-white`
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
              isActive ? 'bg-green-800 text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-green-800 hover:text-white`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/products'
          className={({ isActive, isPending }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-green-800 text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-green-800 hover:text-white`
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contact'
          className={({ isActive, isPending }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-green-800 text-white' : 'text-gray-300'
            } ${
              isPending ? 'animate-pulse' : ''
            } hover:bg-green-800 hover:text-white`
          }
        >
          Contact
        </NavLink>
      </li>

      <li>
        {user?.email ? (
          <button
            onClick={handleLogOut}
            className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-green-800 hover:text-white'
          >
            Logout
          </button>
        ) : (
          <NavLink
            to='/login'
            className={({ isActive, isPending }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-green-800 text-white' : 'text-gray-300'
              } ${
                isPending ? 'animate-pulse' : ''
              } hover:bg-green-800 hover:text-white`
            }
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
};

export default NavItems;
