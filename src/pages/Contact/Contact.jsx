const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-base text-green-600 font-semibold tracking-wide uppercase'>
          Contact Us
        </h2>
        <p className='mt-1 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
          Get in Touch
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
          We'd love to hear from you! Whether you have a question about our
          products, need assistance, or just want to share your feedback, we're
          here to help.
        </p>
      </div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-2xl font-semibold text-gray-900'>
            Contact Information
          </h3>
          <p className='mt-4 text-lg leading-7 text-gray-500'>
            You can reach us at:
          </p>
          <ul className='mt-4 list-disc list-inside text-lg leading-7 text-gray-500'>
            <li>Email: geenish@gmail.com</li>
            <li>Phone: +880 1316530727</li>
            <li>Address: 9, B-Block, Chandgaon R/A, Chittagong, Bangladesh.</li>
          </ul>

          <div className='mt-8'>
            <h3 className='text-2xl font-semibold text-gray-900'>
              Our Location
            </h3>
            <iframe
              className='mt-4 w-full h-64 rounded-lg shadow-lg'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509597!2d144.95373531531073!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57703c469b6b827!2s123%20Green%20St%2C%20Sustainable%20City%2C%20EcoLand!5e0!3m2!1sen!2sus!4v1618059255696!5m2!1sen!2sus'
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-semibold text-gray-900'>Contact Form</h3>
          <form className='mt-4 bg-green-200 py-10 px-5 rounded-xl'>
            <div className='grid grid-cols-1 gap-6'>
              <label className='block'>
                <span className='text-gray-700'>Your Name</span>
                <input
                  type='text'
                  className='mt-1 block w-full p-2 border-gray-300 bg-green-100 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  placeholder='Abul Asad'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Email Address</span>
                <input
                  type='email'
                  className='mt-1 block w-full p-2 border-gray-300 bg-green-100 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  placeholder='greenish@example.com'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Message</span>
                <textarea
                  className='mt-1 block w-full p-2 border-gray-300 bg-green-100 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  rows='5'
                  placeholder='Your message here...'
                ></textarea>
              </label>
              <div className='block'>
                <button
                  type='submit'
                  className='w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300'
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
