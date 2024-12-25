import React from 'react'
import Image from 'next/image'
import Author from './_child/Author'
import Link from 'next/link'
const Latestposts = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 m-4 pb-10'>
          <h1 className='font-bold text-4xl pb-12 text-center mx-auto hover:text-gray-800'>Latest Posts</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 container mx-auto'>
              {/* Box 1 */}
              <div className="flex flex-col items-start p-4">
                  <div className="w-full">
                      <Image
                          src="/images/post1.jpg"
                          width={200}
                          height={300}
                          alt='plant'
                          className='w-full h-auto object-cover rounded-md' />
                  </div>

                  <div className="mt-4 w-full">
                      <div className='flex gap-4 mb-2'>
                          <div className='text-orange-600 hover:text-orange-800 cursor-pointer'>Business, Travel</div>
                          <div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div>
                      </div>

                      <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
                      <Link href={'/Posts/1'}>Your most unhappy customers are your greatest source of learning</Link>
                      </h1>

                      <p className='text-gray-500 py-3 leading-relaxed'>
                          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                      </p>

                      <Author />
                  </div>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col items-start p-4">
                  <div className="w-full">
                      <Image
                          src="/images/blog4.jpg"
                          width={200}
                          height={300}
                          alt='plant'
                          className='w-full h-auto object-cover rounded-md' />
                  </div>

                  <div className="mt-4 w-full">
                      <div className='flex gap-4 mb-2'>
                          <div className='text-orange-600 hover:text-orange-800 cursor-pointer'>Business, Travel</div>
                          <div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div>
                      </div>

                      <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
                      <Link href={'/Posts/1'}>Your most unhappy customers are your greatest source of learning</Link>
                      </h1>

                      <p className='text-gray-500 py-3 leading-relaxed'>
                          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                      </p>

                      <Author />
                  </div>
              </div>

              {/* Box 3 */}
              <div className="flex flex-col items-start p-4">
                  <div className="w-full">
                      <Image
                          src="/images/post3.jpg"
                          width={200}
                          height={300}
                          alt='plant'
                          className='w-full h-auto object-cover rounded-md' />
                  </div>

                  <div className="mt-4 w-full">
                      <div className='flex gap-4 mb-2'>
                          <div className='text-orange-600 hover:text-orange-800 cursor-pointer'>Business, Travel</div>
                          <div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div>
                      </div>

                      <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
                      <Link href={'/Posts/5'}>Your most unhappy customers are your greatest source of learning</Link>
                      </h1>

                      <p className='text-gray-500 py-3 leading-relaxed'>
                          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                      </p>

                      <Author />
                  </div>
              </div>

                  {/* Box 4 */}
                  <div className="flex flex-col items-start p-4">
                  <div className="w-full">
                      <Image
                          src="/images/post4.jpg"
                          width={200}
                          height={300}
                          alt='plant'
                          className='w-full h-auto object-cover rounded-md' />
                  </div>

                  <div className="mt-4 w-full">
                      <div className='flex gap-4 mb-2'>
                          <div className='text-orange-600 hover:text-orange-800 cursor-pointer'>Business, Travel</div>
                          <div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div>
                      </div>

                      <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
                      <Link href={'/Posts/3'}> Your most unhappy customers are your greatest source of learning</Link>
                      </h1>

                      <p className='text-gray-500 py-3 leading-relaxed'>
                          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                      </p>

                      <Author />
                  </div>
              </div>

                  {/* Box 5 */}
                  <div className="flex flex-col items-start p-4">
                  <div className="w-full">
                      <Image
                          src="/images/post5.jpg"
                          width={200}
                          height={300}
                          alt='plant'
                          className='w-full h-auto object-cover rounded-md' />
                  </div>

                  <div className="mt-4 w-full">
                      <div className='flex gap-4 mb-2'>
                          <div className='text-orange-600 hover:text-orange-800 cursor-pointer'>Business, Travel</div>
                          <div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div>
                      </div>

                      <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
                      <Link href={'/Posts/4'}>Your most unhappy customers are your greatest source of learning</Link>
                      </h1>

                      <p className='text-gray-500 py-3 leading-relaxed'>
                          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                      </p>

                      <Author />
                  </div>
              </div>

              {/* Box 6 */}
              <div className="flex flex-col items-start p-4">
                  <div className="w-full">
                      <Image
                          src="/images/post1.jpg"
                          width={200}
                          height={300}
                          alt='plant'
                          className='w-full h-auto object-cover rounded-md' />
                  </div>

                  <div className="mt-4 w-full">
                      <div className='flex gap-4 mb-2'>
                          <div className='text-orange-600 hover:text-orange-800 cursor-pointer'>Business, Travel</div>
                          <div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div>
                      </div>

                      <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
                      <Link href={'/Posts/2'}>Your most unhappy customers are your greatest source of learning</Link>
                      </h1>

                      <p className='text-gray-500 py-3 leading-relaxed'>
                          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                      </p>

                      <Author />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Latestposts
