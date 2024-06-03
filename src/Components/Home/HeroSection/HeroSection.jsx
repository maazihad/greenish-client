import heroImage from '../../../assets/HeroImage/heroImage.jpg';
const HeroSection = () => {
  return (
    <div className='bg-gray-100 py-20 flex justify-center items-center'>
      <div className='flex flex-col md:flex-row items-center max-w-4xl mx-auto'>
        <img
          src={heroImage}
          alt='Quilting'
          className='w-full md:w-1/2 mb-8 md:mb-0 md:mr-8'
        />
        <div className='text-center md:text-left'>
          <h1 className='text-lg font-semibold text-green-700'></h1>
          <h2 className='text-3xl font-bold text-green-900 my-4'>
            STREAMLINE YOUR QUILTING PROCESS
          </h2>
          <p className='text-gray-600 mb-4'>
            The Omnigrid FoldAway Cutting & Pressing Station combines a cutting
            mat and pressing surface, making it a two-in-one solution for
            cutting and pressing.
          </p>
          <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300'>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
