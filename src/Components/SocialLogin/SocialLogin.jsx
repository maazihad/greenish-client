import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

const SocialLogin = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleSocialLogin = (platform) => {
    switch (platform) {
      case 'Google':
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            return user;
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case 'Facebook':
        signInWithPopup(auth, facebookProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            return user;
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      default:
        console.log('Unsupported platform');
        break;
    }
  };

  return (
    <div className='flex flex-col space-y-4 items-center bg-gray-100'>
      <button
        onClick={() => handleSocialLogin('Google')}
        className='w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
      >
        Continue with Google
      </button>
      <button
        onClick={() => handleSocialLogin('Facebook')}
        className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        Continue with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
