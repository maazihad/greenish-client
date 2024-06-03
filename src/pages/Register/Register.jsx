import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Register = () => {
  const auth = getAuth(app);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    switch (true) {
      case password.length < minLength:
        return 'Password must be at least 8 characters long.';
      case !upperCase:
        return 'Password must contain at least one uppercase letter.';
      case !lowerCase:
        return 'Password must contain at least one lowercase letter.';
      case !number:
        return 'Password must contain at least one number.';
      case !specialCharacters:
        return 'Password must contain at least one special character.';
      default:
        return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { email, password } = formData;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setIsLoading(false);
      setError(passwordError);
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(result.user);
      setIsLoading(false);
      toast.success('Successfully Registered.');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
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
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
            />
          </div>
          <div>
            <button
              type='submit'
              className='w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              disabled={isLoading}
            >
              {isLoading ? <FaSpinner className='animate-spin' /> : 'Register'}
            </button>
          </div>
        </form>
        <SocialLogin />
        {error && <p className='mt-4 text-center text-red-600'>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
