import { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const ExploreCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/exploreCategory')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8'>
      <h2 className='text-3xl font-bold mb-6 text-center text-green-900'>
        EXPLORE BY CATEGORY
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {categories.map((categoryItem) => (
          <CategoryItem
            key={categoryItem.id}
            categoryItem={categoryItem}
          ></CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategory;
