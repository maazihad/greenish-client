import AwesomeSlider from 'react-awesome-slider';
import imgOne from '../../../assets/SliderImages/Img-1.jpg';
import imgTwo from '../../../assets/SliderImages/Img-2.jpg';
import imgThree from '../../../assets/SliderImages/Img-3.jpg';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const BannerSlider = () => {
  const handleShopNowClick = () => {
    history.push('/shop'); // Navigate to the shop page
  };

  return (
    <section>
      <AwesomeSlider animation='cubeAnimation'>
        <div data-src={imgOne}>
          <div className=' absolute inset-0 flex flex-col items-center justify-center text-center max-w-2xl mx-auto'>
            <div className='text-black text-lg bg-white bg-opacity-80 p-10 rounded-2xl'>
              <h2 className='text-green-900 text-5xl font-bold '>
                Crafted by Nature
              </h2>
              <p className='text-green-700  p-4 rounded mb-4'>
                Discover our unique, handmade eco-friendly products crafted with
                care and sustainability in mind. Perfect for the environmentally
                conscious home
              </p>
              <button
                onClick={handleShopNowClick}
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div data-src={imgTwo}>
          <div className=' absolute inset-0 flex flex-col items-center justify-center text-center max-w-2xl ] mx-auto'>
            <div className='text-black text-lg bg-white bg-opacity-80 p-10 rounded-2xl'>
              <h2 className='text-green-900 text-5xl font-bold '>
                Sustainable Elegance
              </h2>
              <p className='text-green-700  p-4 rounded mb-4'>
                Embrace the beauty of sustainability with our artisanal
                creations. Each piece is a testament to nature&apos;s elegance
                and our commitment to the planet.
              </p>
              <button
                onClick={handleShopNowClick}
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div data-src={imgThree}>
          <div className=' absolute inset-0 flex flex-col items-center justify-center text-center max-w-2xl ] mx-auto'>
            <div className='text-black text-lg bg-white bg-opacity-80 p-10 rounded-2xl'>
              <h2 className='text-green-900 text-5xl font-bold '>
                Eco-Friendly Artistry
              </h2>
              <p className='text-green-700  p-4 rounded mb-4'>
                Explore the fusion of art and nature with our collection of
                eco-friendly, handmade goods. Beautifully crafted to enhance
                your home while preserving the environment.
              </p>
              <button
                onClick={handleShopNowClick}
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </section>
  );
};

export default BannerSlider;
