import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Author = () => {
  return (
   <div className='author flex py-5'>
      <Image
      src="/images/author1.jpg"
      alt='author'
      width={60}
      height={60}
      className='rounded-full'

      />
      <div className="flex flex-col justify-center px-4 ">
          <Link href={"/"}>
          <div className='text-md font-bold text-gray-800 hover:text-gray-600'>
            Flying High</div></Link>
            <span className='text-sm text-gray-500'>CEO and Founder</span>

      </div>
   </div>
  )
}

export default Author