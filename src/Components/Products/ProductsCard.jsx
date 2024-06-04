import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  const { id, product_title, product_img, rating, price } = product;
  return (
    <div className='card w-full bg-base-100 shadow-xl flex flex-col rounded-none'>
      <figure>
        <img
          className='object-cover w-full h-72'
          src={product_img}
          alt={product_title}
        />
      </figure>
      <div className='flex flex-col flex-grow p-2 space-y-2'>
        <h2 className='text-lg text-green-900 font-medium text-center'>
          {product_title}
        </h2>

        <div className='flex-grow'>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-green-900 font-bold'>${price}</span>
            <span className='text-yellow-500'>{`Rating: ${rating}`}</span>
          </div>
        </div>

        <div className='card-actions justify-center mt-auto'>
          <Link to={`/products/${id}`}>
            <button className='btn btn-sm text-green-900  hover:bg-green-700 hover:text-white duration-500'>
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
