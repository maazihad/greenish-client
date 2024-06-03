import mainImage from '../../../assets/ProductHighLightImage/imageOne.jpg';
import imageTwo from '../../../assets/ProductHighLightImage/imageTwo.jpg';
import imageThree from '../../../assets/ProductHighLightImage/imageThree.jpg';

const ProductHighlightSection = () => {
  return (
    <div className='bg-white py-20 px-4'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-2/3 p-4'>
          <img src={mainImage} alt='Main Product' className='w-full h-auto' />
        </div>
        <div className='w-full lg:w-1/3 p-4 flex flex-col justify-between'>
          <div className='text-center lg:text-left mb-4'>
            <h2 className='text-sm text-gray-600 uppercase mb-2'>
              PRODUCT HIGHLIGHT
            </h2>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              CREATE FLAWLESS HANDMADE PRODUCTS
            </h1>
            <p className='text-gray-600 mb-6'>
              Discover how the Design Ruler Trio simplifies pattern adjustments
              for a custom fit every time.
            </p>
            <a href='#' className='text-blue-500 hover:underline'>
              LEARN MORE
            </a>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-4'>
              <img
                src={imageTwo}
                alt='Detail 1'
                className='object-cover w-full h-full sm:h-56 md:h-64 lg:h-72'
              />
            </div>
            <div className='p-4'>
              <img
                src={imageThree}
                alt='Detail 2'
                className='object-cover w-full h-full sm:h-56 md:h-64 lg:h-72'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlightSection;
