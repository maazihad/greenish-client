import { useEffect, useState } from 'react';

const ExploreCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/exploreCategory')
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h2>Category : {category.length}</h2>
    </div>
  );
};

export default ExploreCategory;
