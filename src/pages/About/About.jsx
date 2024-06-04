const About = () => {
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-base text-green-600 font-semibold tracking-wide uppercase'>
          About Us
        </h2>
        <p className='mt-1 text-3xl leading-9 font-extrabold text-green-900 sm:text-4xl sm:leading-10'>
          Welcome to Greenish
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
          At Greenish, we are dedicated to providing eco-friendly, handmade
          products that not only beautify your home but also support sustainable
          practices.
        </p>
      </div>

      <div className='mt-10'>
        <h3 className='text-2xl font-semibold text-green-900'>Our Mission</h3>
        <p className='mt-4 text-lg leading-7 text-gray-500'>
          Our mission is to bring you high-quality, handcrafted products made
          from natural and sustainable materials. We believe in supporting local
          artisans and promoting environmentally friendly practices. Every
          product you purchase from us helps support our mission of creating a
          greener, more sustainable world.
        </p>
      </div>

      <div className='mt-10'>
        <h3 className='text-2xl font-semibold text-green-900'>Our Products</h3>
        <p className='mt-4 text-lg leading-7 text-gray-500'>
          We offer a wide range of handmade products including items made from
          rattan, jute, bamboo, wood, mat leaves, palm leaves, and more. Each
          product is crafted with care and attention to detail, ensuring that
          you receive a beautiful and durable item that you can cherish for
          years to come.
        </p>
      </div>

      <div className='mt-10'>
        <h3 className='text-2xl font-semibold text-green-900'>Our Values</h3>
        <ul className='mt-4 list-disc list-inside text-lg leading-7 text-gray-500'>
          <li>
            Sustainability: We prioritize environmentally friendly materials and
            sustainable practices in all that we do.
          </li>
          <li>
            Quality: We ensure that every product meets our high standards of
            craftsmanship and durability.
          </li>
          <li>
            Community: We support local artisans and promote fair trade
            practices.
          </li>
          <li>
            Customer Satisfaction: We strive to provide exceptional customer
            service and ensure that you are completely satisfied with your
            purchase.
          </li>
        </ul>
      </div>

      <div className='mt-10'>
        <h3 className='text-2xl font-semibold text-gray-900'>Our Team</h3>
        <p className='mt-4 text-lg leading-7 text-gray-500'>
          Our team is made up of passionate individuals who are dedicated to our
          mission of sustainability and quality. From our artisans to our
          customer service representatives, everyone at Greenish is committed to
          providing you with the best possible experience.
        </p>
      </div>
    </div>
  );
};

export default About;
