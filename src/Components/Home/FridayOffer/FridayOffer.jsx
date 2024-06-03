import imageOne from '../../../assets/FridayOffer/imageOne.jpg';

const FridayOffer = () => {
  return (
    <div className='relative'>
      <div>
        <img
          className='lg:w-full md:w-auto object-cover md:h-full h-96'
          src={imageOne}
          alt='Friday Offer Image'
        />
      </div>
      <div className=' absolute inset-0 flex flex-col items-center justify-center text-center max-w-2xl ] mx-auto '>
        <div className='text-lg bg-green-900 bg-opacity-80 p-10 space-y-5'>
          <h2 className='text-white text-2xl font-bold '>
            20% Friday Deal Offer
          </h2>
          <input
            type='email'
            placeholder='Email'
            className='input input-bordered input-success w-full max-w-xs rounded-none'
          />
          <button
            onClick={''}
            className='bg-green-500 hover:bg-green-700 text-white text-sm duration-700 py-2 px-4 '
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default FridayOffer;
