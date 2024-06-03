import { useState } from 'react';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import { Helmet } from 'react-helmet-async';

const Authentication = () => {
  const [newUser, setNewUser] = useState(false);

  return (
    <>
      <Helmet>
        <title>{newUser ? 'Register' : 'Login'} | Greenish Bazaar.</title>
      </Helmet>
      <section>
        {newUser ? <Register /> : <Login />}
        <div className=' bg-gray-100'>
          <div
            onClick={() => setNewUser(!newUser)}
            className='cursor-pointer  px-2 lg:w-full  text-center lg:inline-block text-sm text-gray-600 tracking-wide font-medium'
          >
            {newUser ? (
              <div className='hover:text-red-900 border-red-400'>
                <span className='font-bold'>Have an account? </span>Please Sign
                in.
              </div>
            ) : (
              <div className='hover:text-red-900 border-red-400'>
                <span className='font-bold'>New purchaser? </span> please
                register.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Authentication;
