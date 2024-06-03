import { useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
  const { createUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    switch (true) {
      case password.length < minLength:
        return 'Password must be at least 8 characters long.';
      case !hasUpperCase:
        return 'Password must contain at least one uppercase letter.';
      case !hasLowerCase:
        return 'Password must contain at least one lowercase letter.';
      case !hasNumber:
        return 'Password must contain at least one number.';
      case !hasSpecialChar:
        return 'Password must contain at least one special character.';
      default:
        return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = formData;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setIsLoading(false);
      toast.error(passwordError);
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log(result.user);
      setIsLoading(false);
      toast.success('Successfully Register.');
      navigate(from, { replace: true });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Register|| Greenish Bazaar.</title>
      </Helmet>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md'>
          <h2 className='text-2xl font-bold text-center'>Register</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
              />
            </div>
            <div className='relative'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
              />
              {/* >>>>>>>>>>>>>>>>>>>Show password<<<<<<<<<<<<<<<< */}
              <span
                className='absolute right-5 top-8'
                onClick={() => setShowPassword(!showPassword)}
              >
                <small>
                  {showPassword ? (
                    <FaEye className='cursor-pointer text-2xl text-red-700' />
                  ) : (
                    <FaEyeSlash className='cursor-pointer text-2xl text-red-900 ' />
                  )}
                </small>
              </span>
            </div>
            <div>
              <button
                type='submit'
                className='w-full px-4 py-2 font-semibold text-white bg-green-600 rounded shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                disabled={isLoading}
              >
                {isLoading ? (
                  <FaSpinner className='animate-spin' />
                ) : (
                  'Register'
                )}
              </button>
            </div>
          </form>
          <p className='text-center text-xl text-red-500'>
            <small>
              Have an account ? Please
              <Link to='/login' className='text-red-600 font-semibold'>
                {' '}
                Login.
              </Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Register;
