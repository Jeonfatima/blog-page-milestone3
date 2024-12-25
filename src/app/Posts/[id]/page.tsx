"use client"; // Enable client-side rendering

import React from "react";
import { useParams } from "next/navigation"; // Correct hook for app router
import Image from "next/image";
import Link from "next/link";
import Author from "../../../components/_child/Author";
import Relatedposts from "@/components/Relatedposts";


// Sample Data for Posts
const postData = [
  {
    id: "1",
    title: "Your most unhappy customers are your greatest source of learning",
    category: "Business,Travel",
    date: "December 23, 2024",
    image: "/images/blog1.jpg",
    content: `Its easy to view complaints as a sign of failure, but the reality is far more constructive. Each complaint presents a unique opportunity to deepen our understanding of customer needs and refine our offerings. When a customer takes the time to share their dissatisfaction, its often because they believe in the value of what we provide and hope for a resolution. This act of reaching out is, paradoxically, a testament to their commitment..`,
  },
  {
    id: "2",
    title: "Exploring the Future of Technology: Trends and Innovations",
    category: "Technology",
    date: "December 23, 2024",
    image: "/images/blog2.jpg",
    content: `Dive into the latest advancements shaping our world—from AI to quantum computing.Quantum computing represents the next stage in raw computing power. Unlike classical computers limited to binary bits of 1s or 0s, quantum computers leverage quantum bits (qubits) that can represent multiple states or values simultaneously. This property, known as superposition, allows quantum computers to evaluate multitudes of solutions concurrently at lightning speeds compared to traditional systems.`,
  },
  {
    id: "3",
    title: "The Art of Productivity: Tips for a Balanced Life",
    category: "Lifestyle",
    date: "December 23, 2024",
    image: "/images/blog3.jpg",
    content: `Learn practical strategies to boost efficiency without burning out. Discover how to create a well-balanced lifestyle while achieving personal and professional goals.Productivity is a bit of an obsession for me. I’m always trying to streamline my time and get more done. Sometimes, it feels as if I spend more time trying to be productive than I do actually being productive.`,
  },
  {
    id: "4",
    title: "Travel Diaries: Hidden Gems Around the World",
    category: "Travel",
    date: "December 23, 2024",
    image: "/images/blog4.jpg",
    content: `Join us on a journey to uncover breathtaking destinations and off-the-beaten-path experiences. Perfect for wanderlust seekers looking for inspiration and adventure.The northern areas of Pakistan are known as famous destination sites across the globe as they match the many European favorite destinations `,
  },
  {
    id: "5",
    title: "Mindfulness and Wellness: A Journey to Inner Peace",
    category: "Wellness",
    date: "December 23, 2024",
    image: "/images/blog5.jpg",
    content: `Discover mindfulness practices and wellness routines to reduce stress and improve mental health. Embrace habits that nurture your body, mind, and soul.Inner peace is a state of tranquility, acceptance, and contentment that can be achieved by being in harmony with yourself, others, and the world around you. It's not about avoiding challenges, but rather navigating through them with an accepting and tranquil mind.`,
  },
];

// Post Detail Component
const PostDetail = () => {
  const { id } = useParams(); // Get the ID from the route

  // Find the post with the matching ID
  const post = postData.find((item) => item.id === id);

  // If no post is found, show an error message
  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Post Not Found!</h1>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div >
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        {/* Author */}
        <div className="flex justify-center">
          <Author />
        </div>

        {/* Post Header */}
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{post.title}</h1>
          <p className="text-gray-500 text-xl text-center">
            {post.category} - {post.date}
          </p>
        </div>

        {/* Image */}
        <div className="py-10 flex justify-center items-center">
          <Image
            src={post.image}
            width={600}
            height={400}
            alt="Post Image"
            className="mx-auto"
          />
        </div>

        {/* Content */}
        <div className="content text-gray-600 text-xl flex flex-col gap-4">
          <p className="text-2xl text-grey ">{post.content}</p>
          <p className="text-2xl text-grey ">{post.content}</p>
          
        </div>
        <button className='bg-orange-400 px-20 my-10 py-3 rounded-full text-gray-50 text-xl mx-auto items-center '>
        <Link className="bg-orange-400" href={"/"}>Back to Homepage</Link>
      </button>
      
      </section>
      <Relatedposts/>
      
    </div>
  );
};

export default PostDetail;
