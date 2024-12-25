import React from 'react'
import Link from 'next/link'
import { SiFacebook } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
const Header = () => {
  return (
    <div>
        <header className='bg-gray-50 '>
            <div className='xl:container xl:mx-auto flex flex-col items-center
            sm:flex-row sm:justify-between text-center py-3 bg-gray-100 '>
                  <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0 bg-gray-100'>
                    <input type='text' placeholder='Search...' className='mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-md placeholder-slate-500 hover:border-sky-500'></input>
                  </div>

                  <div className='shrink w-80 sm:order-2 bg-gray-100'>
                    <Link href="" className='font-bold
                     uppercase text-3xl'>Design</Link>
                  </div>

                  <div className='w-96 order-3 flex justify-center gap-6 text-2xl text-[#888888] bg-gray-100'>
                     <div className="flex bg-gray-100"></div>
                     <Link  href=""><SiFacebook /></Link>
                     <Link   href=""><BsTwitter /></Link>
                     <Link  href=""><GrYoutube /></Link>
                  </div>
            </div>
        </header>
    </div>
  )
}

export default Header