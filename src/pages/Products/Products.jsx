import { useEffect } from 'react';
import { useState } from 'react';
import ProductsCard from '../../Components/Products/ProductsCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('http://localhost:3000/products');
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

  return (
    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

// {
//   products.map((product) => (
//     <div
//       key={product.id}
//       className='bg-white rounded-lg shadow-md overflow-hidden'
//     >
//       <img
//         className='w-full h-48 object-cover'
//         src={product.product_img}
//         alt={product.product_title}
//       />
//       <div className='p-4'>
//         <h3 className='text-xl font-semibold mb-2'>{product.product_title}</h3>
//         <p className='text-gray-600 text-sm mb-4'>{product.product_info}</p>
//         <ul className='list-disc list-inside text-gray-700 mb-4'>
//           {product.product_features.map((feature, index) => (
//             <li key={index}>{feature}</li>
//           ))}
//         </ul>
//         <div className='flex items-center justify-between'>
//           <span className='text-gray-900 font-bold'>${product.price}</span>
//           <span className='text-yellow-500'>{`Rating: ${product.rating}`}</span>
//         </div>
//         <div className='mt-4'>
//           <button
//             className={`w-full bg-${
//               product.product_available ? 'green' : 'red'
//             }-500 text-white font-bold py-2 px-4 rounded`}
//           >
//             {product.product_available ? 'Add to Cart' : 'Out of Stock'}
//           </button>
//         </div>
//       </div>
//     </div>
//   ));
// }
