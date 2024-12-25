import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <section className='bg-gray-100 mt-20'>
            <div className='container mx-auto md:px-20 py-16 text-center bg-gray-100'>
                  <h1 className='font-bold text-3xl  bg-gray-100'>Subscribe Newsletter</h1>

                  <div className='py-4 bg-gray-100'>
                    <input type='text' className='shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='Enter your email'>

                   </input>

                  </div>

                  <button className='bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl'>
                             Subscribe
                  </button>
            </div>

        </section>
    </div>
  )
}

export default Newsletter