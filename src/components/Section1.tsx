"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/Author'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from "swiper/modules";
import "swiper/css/navigation";

// Import Swiper styles
import 'swiper/css';


const Section1 = () => {



  return (
    <div>
        <section className='py-16'>
            <div className='container mx-auto md:px-20'>
                <h1 className='font-bold text-4xl pb-12 text-center'>
                   Trending
                </h1>
          <Swiper
            modules={[Autoplay, Navigation]} // Include Autoplay here
            autoplay={{
              delay: 5000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            navigation // Enables navigation buttons
            
            slidesPerView={1} // Number of slides visible at once
            loop={true} // Enables infinite loop
          >
            <SwiperSlide>{Slide1()}</SwiperSlide>
            <SwiperSlide>{Slide2()}</SwiperSlide>
            <SwiperSlide>{Slide3()}</SwiperSlide>
            <SwiperSlide>{Slide4()}</SwiperSlide>
            <SwiperSlide>{Slide5()}</SwiperSlide>
          
            ...
          </Swiper>

              

           </div>
        </section>
    </div>
  )
}

function Slide1(){
    return(
        <div className='grid md:grid-cols-2'>
             <div className='image'>
            <Link href={'/'}>    <Image src="/images/img1.jpg" width={600} height={600} alt='plant'/></Link>
             </div>



             <div className='info pl-9 flex justify-center flex-col'>
                 <div className='cat flex'>
                    <Link href={'/'}><div className='text-orange-600 hover:text-orange-800 '>Business,Travel</div></Link>
                    <Link href={'/'}><div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div></Link>
                 </div>
 
                <div className='title '>
                    <Link href={'/Posts/1'}><h1 className='text-2xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</h1></Link>
                </div>
                <p className='text-gray-500 py-3 '>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar</p>
                <Author/>

             </div>
             </div>
  )
}

function Slide2(){
  return(
      <div className='grid md:grid-cols-2'>
           <div className='image'>
          <Link href={'/'}>    <Image src="/images/slide2.jpg" width={600} height={400} alt='plant'/></Link>
           </div>



           <div className='info pl-9 flex justify-center flex-col'>
               <div className='cat flex'>
                  <Link href={'/'}><div className='text-orange-600 hover:text-orange-800 '>Technology</div></Link>
                  <Link href={'/'}><div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div></Link>
               </div>

              <div className='title '>
                  <Link href={'/Posts/2'}><h1 className='text-2xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>Exploring the Future of Technology: Trends and Innovations</h1></Link>
              </div>
              <p className='text-gray-500 py-3 '>Dive into the latest advancements shaping our world—from artificial intelligence to quantum computing. Discover how technology is transforming industries and daily life.</p>
              <Author/>

           </div>
           </div>
)
}


function Slide3(){
  return(
      <div className='grid md:grid-cols-2'>
           <div className='image'>
          <Link href={'/'}>    <Image src="/images/slide3.jpg" width={500} height={400} alt='plant' className='pl-6'/></Link>
           </div>



           <div className='info pl-9 flex justify-center flex-col'>
               <div className='cat flex'>
                  <Link href={'/'}><div className='text-orange-600 hover:text-orange-800 '>Business,Travel</div></Link>
                  <Link href={'/'}><div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div></Link>
               </div>

              <div className='title '>
                  <Link href={'/Posts/3'}><h1 className='text-2xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>The Art of Productivity: Tips for a Balanced Life</h1></Link>
              </div>
              <p className='text-gray-500 py-3 '>Learn practical strategies to boost efficiency without burning out. Explore time management techniques, goal-setting tips, and tools to create a balanced and productive lifestyle.</p>
              <Author/>

           </div>
           </div>
)
}


function Slide4(){
  return(
      <div className='grid md:grid-cols-2'>
           <div className='image'>
          <Link href={'/'}>    <Image src="/images/slide4.jpg" width={500} height={500} alt='plant'/></Link>
           </div>



           <div className='info pl-9 flex justify-center flex-col'>
               <div className='cat flex'>
                  <Link href={'/'}><div className='text-orange-600 hover:text-orange-800 '>Business,Travel</div></Link>
                  <Link href={'/'}><div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div></Link>
               </div>

              <div className='title '>
                  <Link href={'/Posts/4'}><h1 className='text-2xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>Travel Diaries: Hidden Gems Around the World</h1></Link>
              </div>
              <p className='text-gray-500 py-3 '>Join us on a journey to uncover breathtaking destinations and off-the-beaten-path experiences. Perfect for wanderlust seekers looking for inspiration and adventure.</p>
              <Author/>

           </div>
           </div>
)
}


function Slide5(){
  return(
      <div className='grid md:grid-cols-2'>
           <div className='image'>
          <Link href={'/'}>    <Image src="/images/slide5.jpg" width={600} height={600} alt='plant'/></Link>
           </div>



           <div className='info pl-9 flex justify-center flex-col'>
               <div className='cat flex'>
                  <Link href={'/'}><div className='text-orange-600 hover:text-orange-800 '>Business,Travel</div></Link>
                  <Link href={'/'}><div className='text-gray-700 hover:text-gray-600'>- December 23, 2024</div></Link>
               </div>

              <div className='title '>
                  <Link href={'/Posts/5'}><h1 className='text-2xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>Mindfulness and Wellness: A Journey to Inner Peace</h1></Link>
              </div>
              <p className='text-gray-500 py-3 '>Discover mindfulness practices and wellness routines to reduce stress and improve mental health. Embrace habits that nurture your body, mind, and soul.</p>
              <Author/>

           </div>
           </div>
)
}


export default Section1