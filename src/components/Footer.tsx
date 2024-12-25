
import React from 'react'
import Link from 'next/link'
import { SiFacebook } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import Newsletter from './_child/Newsletter';
export const Footer = () => {
  return (
    <div>
      <footer className=' bg-gray-100 '>
        <Newsletter/>
          <div className='container bg-gray-100
          mx-auto flex justify-center py-12'>
             <div className='py-5 bg-gray-100'>
               <div className='flex gap-6 justify-center bg-gray-100'>
               <Link href=""><SiFacebook /></Link>
                     <Link href=""><BsTwitter /></Link>
                     <Link href=""><GrYoutube /></Link>
               </div>
               <p className='py-5 text-gray-400 bg-gray-100'>
                Copyright @2024 All rights reserved | This template is made by FATIMA SALMAN
               </p>
               <p className='text-gray-400 text-center bg-gray-100'>Terms & Conditions</p>
             </div>
          </div>
      </footer>


    </div>
  )
}
