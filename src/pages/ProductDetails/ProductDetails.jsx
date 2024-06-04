import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating-stars-component';

const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col md:flex-row'>
        <img
          className='w-full md:w-1/2 h-72 object-cover'
          src={product.product_img}
          alt={product.product_title}
        />
        <div className='md:ml-8'>
          <h2 className='text-3xl font-bold mb-2'>{product.product_title}</h2>
          <Rating
            count={5}
            value={product.rating}
            size={24}
            activeColor='#ffd700'
            edit={false}
          />
          <p className='text-gray-600 text-lg mt-4 mb-4'>
            {product.product_info}
          </p>
          <ul className='list-disc list-inside text-gray-700 mb-4'>
            {product.product_features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className='text-xl font-bold mb-4'>${product.price}</p>
          <div className='mt-4'>
            <button
              className={`w-full bg-${
                product.product_available ? 'green' : 'red'
              }-500 text-white font-bold py-2 px-4 rounded hover:bg-${
                product.product_available ? 'green' : ''
              }-700 duration-500`}
            >
              {product.product_available ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
