import React from 'react'



export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-netural-50 mb-40">
        <h2
         className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out 
         trnsform hover:translate-y[-5px] hover:text-black  text-amber-700"
         >
              Animals Blog:Animals are such agreeable friends  they ask no questions
              they pass no criticisms.
        </h2>
        <p className="text-center  font-medium m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up
         delay-100">
        The animal kingdom is diverse, with animals of all shapes, sizes, and habitats.Some animals are 
        predators while others are herbivores.Animals are essential to human life and the planet.
         Humans use animals for food transportation protection, and companionship.
         Animals also help maintain the balance of the enviournment.Scientists divide animals into two main groups: vertebrates, which have a backbone, and invertebrates which do not 
         About 95% of all animals are invertebrates.
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-amber-700 animate-color-change">Interesting Information About Different Animals </h1>
          
          <div  className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[ 
              "Tiger",
              
              "Bear",
              "Elephant",
              "Horse",
              "Panda",
              "Dog",
              "Cat",
              "Zebra",
              "Cow",
              
            ].map((different, index) => (
              <div key={index} 
               className="relative group py-6 bg-amber-600 rounded-lg shadow-lg hover:bg-amber-800 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-black">
                <p className="text-center text-lg font-semibold">{different}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg duration-300 ease-in-out "></div>
               </div>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          Over 1.5 million living animal species have been described, of which around 1.05 million are insects,
           over 85,000 are molluscs, and around 65,000 are vertebrates. It has been estimated
           there are as many as 7.77 million animal species on Earth.Animals are the creatures of God and
            has been made to help humans environment. They provide humans with food and soil with nutritions 
            they are main source to provide us with meat,dairy and poultry.Animals carry a lot of importance in our lives
            They offer humans with food and many other things For instance we consume meat, eggs, dairy products 
            Further, we use animals as a pet too. They are of great help to handicaps. Thus, through the animal 
            essay, we will take a look at these creatures and their importance.Animals play an essential role in human life and planet earth
            Ever since an early time, humans have been using animals for their benefit Earlier they came in use 
            for transportation purposes

 
        </p>
      </section>
    </div>
  )
}