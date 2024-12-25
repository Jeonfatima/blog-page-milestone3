import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RelatedPosts = () => {
  return (
    <div className='container mx-auto p-6 '>
      <h1 className='font-bold text-4xl pb-12 text-center hover:text-gray-800'>Related Posts</h1>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-row gap-6 items-center'>
          <div className='flex-shrink-0'>
            <Image
              src='/images/post1.jpg'
              width={180}
              height={120}
              alt='post image'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 text-sm'>
              <span className='text-orange-600 hover:text-orange-800 cursor-pointer'>Business, Travel</span>
              <span className='text-gray-700 hover:text-gray-600'>December 23, 2024</span>
            </div>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
            <Link href={'/Posts/1'}>Your most unhappy customers are your greatest source of learning</Link>
            </h1>
          </div>
        </div>

        <div className='flex flex-row gap-6 items-center'>
          <div className='flex-shrink-0'>
            <Image
              src='/images/post2.jpg'
              width={180}
              height={120}
              alt='post image'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 text-sm'>
              <span className='text-orange-600 hover:text-orange-800 cursor-pointer'>Technology, Innovation</span>
              <span className='text-gray-700 hover:text-gray-600'>December 24, 2024</span>
            </div>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
            <Link href={'/Posts/2'}>The best way to predict the future is to invent it</Link>
            </h1>
          </div>
        </div>

        <div className='flex flex-row gap-6 items-center'>
          <div className='flex-shrink-0'>
            <Image
              src='/images/post3.jpg'
              width={180}
              height={120}
              alt='post image'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 text-sm'>
              <span className='text-orange-600 hover:text-orange-800 cursor-pointer'>Health, Lifestyle</span>
              <span className='text-gray-700 hover:text-gray-600'>December 25, 2024</span>
            </div>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
            <Link href={'/Posts/3'}>Health is not valued till sickness comes</Link>
            </h1>
          </div>
        </div>

        <div className='flex flex-row gap-6 items-center'>
          <div className='flex-shrink-0'>
            <Image
              src='/images/post4.jpg'
              width={180}
              height={120}
              alt='post image'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 text-sm'>
              <span className='text-orange-600 hover:text-orange-800 cursor-pointer'>Education, Learning</span>
              <span className='text-gray-700 hover:text-gray-600'>December 26, 2024</span>
            </div>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 leading-tight'>
            <Link href={'/Posts/4'}>Learning never exhausts the mind</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
