import React from 'react'
import Image from 'next/image'
export default function AuthorCard () {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>

        {/* IMage */}

  <Image
  className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
  src='/images/hanna.jpg'    
  alt='Author image'
  width={900}
  height={500}
  />
  <div>
    <h3 className='text-xl font-bold'>Hannah Gold</h3>
    <p className='text-blue-500'>
      {""}
      Zoologist|Naturalist|Author
            {""}
            </p>  
    </div> 
      </div>  
      
   <p className='mt-4 text-black leading-relaxed'>
   Hannah Gold, a British  author who writes about animals Love of animals. Hanna Gold grew up 
      in a family that loved books, animals, and the outdoors.One of the most recognizable faces of 
      modern zoology, this talented naturalist,is best known for his collaboration with BBC on the 
      natural history documentary series.It is an impressive and extensive study of plant
        and animal life on our planet.
        She  is passionate about animals. Hannah Gold writes books.Book name is For The Lost Whale
             Her 2022 book The Last Bear won the Blue Peter Book Award for Best Story.
             Her 2023 book The Lost Whale won the Edward Stanford Travel Writing Award. 
             Polar bears Gold has said that her spirit animal and other book name is  Turtle Moon 2024
            Golds upcoming book Turtle Moon 2024 is set in a wildlife sanctuary threatened by poaching.
            It explores themes of animal-human relationships and environmental care.
   </p>
<div className='mt-4 flex space-x-3'>
  <a
    href='a'
    className='px-4 py-2 text-white bg-black rounded:md hover:bg-blue-800 transition duration-300'
    >
     Instagram
  </a>

  <a
    href='a'
    className='px-4 py-2 text-white bg-black rounded:md hover:bg-blue-800 transition duration-300'
    >
     Facebook
  </a>

  <a
    href='a'
    className='px-4 py-2 text-white bg-black rounded:md hover:bg-blue-800 transition duration-300'
    >
     Linkedin
  </a>
  <a
    href='a'
    className='px-4 py-2 text-white bg-black rounded:md hover:bg-blue-800 transition duration-300'
    >
     GitHub
  </a>

  </div>

   </div>
  );
}



 