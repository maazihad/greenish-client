const CategoryItem = ({ categoryItem }) => {
  const { name, image } = categoryItem;
  return (
    <div className='bg-white shadow rounded-lg overflow-hidden py-2'>
      <img
        className='object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72'
        src={image}
        alt={name}
      />
      <div className='p-2'>
        <h4 className='text-lg font-semibold text-center text-green-900'>
          {name}
        </h4>
      </div>
      <div className='text-center mb-3'>
        <button className='btn btn-sm rounded-none hover:bg-green-600 hover:text-white  text-green-800'>
          Shop now
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
