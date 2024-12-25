import React from 'react';
import BlogCard from '../Components/BlogCard';



export default  function Mega () {
   const post = [
    {
      id : '1',
      title : "Information About Tiger",
      description: "Tigers are the largest wild cats weighing up to 363 kg  Each tiger has a unique stripe pattern",
      date:"2024-11-28",
      imageUrl :"/images/roo.jpg",

    },
    {
      id : '2',
      title : "Information About Bear",
      description: "Bears are intelligent animals defending their young these wild animals can be dangerous.",
      date:"2024-5-16",
      imageUrl :"/images/bear1.webp",

    },
    {
      id : '3',
      title : "Information About Elephant",
      description: "Elephant is the worlds largest land animal they use their trunks to suck up water", 
      date:"2024-11-28",
      imageUrl :"/images/ele1.jpg",

    },
    {
      id : '4',
      title : "Information About Horse",
      description: " Horses can not breathe through their mouth they can sleep standing up they have excellent hearing skills they", 
      date:"2024-9-21",
      imageUrl :"/images/horsebrown.jpg",

    },

    {
      id : '5',
      title : "Information About Panda ",
      description: "Giant pandas are good swimmers and excellent tree climbers. At 5 months old, giant panda cubs learn how to climb ",
      date:"2024-11-28",
      imageUrl :"/images/panda2.jpg",

    },

    {
      id : '6',
      title : "Information About Dog",
      description: "Dogs are the most popular pet on the planet Dogs are special because of their loyalty companionship and emotional intelligence.", 
      date:"2024-11-28",
      imageUrl :"/images/gytt.jpg",

    },
    {
      id : '7',
      title : "Information About Cat",
      description: "The record for the longest cat ever is 48.5 inches The richest cat in the world had 7-million-poundCats",
      date:"2024-11-28",
      imageUrl :"/images/catty.jpg",

    },
    {
      id : '8',
      title : "Information About Zebra ",
      description: "Their black and white stripes are unique and are as distinctive as human fingerprints", 
      date:"2024-11-28",
      imageUrl :"/images/zebra.jpg",

    },
    {
      id : '9',
      title : "Information About Cow",
      description: "Cows can sleep while standing they can see almost 360 degrees Cows are very social", 
      date:"2024-11-28",
      imageUrl :"/images/twocows.jpg",

    },
   ];
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-amber-700 animate-color-change'>
        { "" }
        Information About Different Animals
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {post.map((post, index) => (
            <div className="fade-in" key={post.id}>
            <div className="blog-card">
               <BlogCard post={post} isDarkBackground={index%2 === 0} />
            </div>
            </div>
          ))}
        </div>
    </div>
  );
  
}

