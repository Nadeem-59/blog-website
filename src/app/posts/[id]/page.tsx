import AuthorCard from '@/Components/AuthorCard';
import CommentSection from '@/Components/CommentSection';
import React from 'react';

const posts = [
  { id : "1",
    title : "Information About Tiger",
    description: "Tigers are the largest wild cats  weighing up to 363 kg and growing up to 3.3 m longEach tiger has a unique stripe pattern  similar to human fingerprints They kill their victims by biting the neck or back of the head Tigers are strong swimmers with webbed paws that help them paddle Tigers can roar but not purr and their short snarls can be heard from almost 2 km away Tigers can run up to 65 km/h Tiger cubs are born blind and are completely dependent on their mother for the first six to twelve days of their lives most tigers have yellow eyes however it is not uncommon to see a tiger with blue eyes. Only white tigers have blue eyes because the blue-eyed gene is liked to the white fur gene Tigers are carnivores, meaning they hunt for and eat meat When tigers go hunting, they hunt alone either shortly before the sun rises or soon after it sets. They hunt for large animals, such as wild pigs, deer, and buffalo, and eat nearly 66 pounds of meat in every meal, equivalent to 120 hamburgers. ",
    date:"2024-11-28",
    image :"/images/roo.jpg",

  },
  {
    id : "2",
    title : "Information About Bear",
    description: "Bears are intelligent animals defending their young these wild animals can be dangerous They usually dig a den which they may use for several  years Before the winter sets in brown bear can reach a weight of between 150 and 370 kilogrammes depending on age, sex and season.Bears have a particularly good nose: their sense of smell enables them to sniff food at a distance of several km brown bears can reach a maximum age of between 20 and 30 years.The brown bear is the largest predator still living on the continent of Europe Bears have the largest relative brain size of any carnivore! Bears can develop strong attachments to other bears.80% of the bear's diet consists of food of vegetable origin and 20% - fish and meat.A bear's hearing ability is excellent, Bears see in colour and have good vision, similar to humans. Bears are fast; they can run more than 60 kilometers an hour (37 mph) - that's twice as fast as an Olympic sprinter. bears can stand and sit as humans do  bear favourite food is bearberries Bears will eat honey if they can, but grizzly and black bears eat mostly vegetation, insects, berries, and meat - especially salmon, scavenged winter killed animals and young moose, caribou and deer.",
    date:"2024-5-16",
    image :"/images/bear1.webp",

  },
  {
    id : "3",
    title : "Information About Elephant",
    description: "Elephant is the worlds largest land animal they use their trunks to suck up water to drink  it can contain up to 8 litres of water. They also use their trunks as a snorkel when swimming An elephants skin is 2.5cm thick. They need to eat up to 150kg of food per day Elephants eat so much that they can spend up to three-quarters of their day just eating.Amazingly, elephant calves are able to stand within 20 minutes of being born and can walk within 1 hour after two days,The  memory is larger and denser than that of people  hence the saying elephants never forget A baby elephant can weigh as much as 200 pounds or 90 kg at birth.The gestation period of an elephant is 22 months, which can account for this weight.Elephants are very sensitive and caring. symbolises royalty in Thailand and Burma, where it is also considered a symbol of good luck.Jumbo, the Most Famous Elephant in the World.A group of elephants is called a herd.Babar: King of the Elephants.Elephants usually have 26 teeth",
    date:"2024-11-28",
    image :"/images/ele1.jpg",

  },
  {
    id : "4",
    title : "Information About Horse",
    description: " Horses can not breathe through their mouth they can sleep standing up they have excellent hearing skills they have a nearly 360-degree field of vision Horses are many colours and patterns of horses Horses are very social animals A typical domesticated horse stands 5 feet (1.5 meters) tall at the shoulder. It weigths about 1,150 pounds (520 kilograms). A horse's legs are strong even though they look very slender. A horse's foot is actually a single toe protected by a hard covering called a hoof. They are intelligent, obedient, friendly, understanding, compassionate, even-tempered, loyal, trustworthy, and beautiful. horses can indeed swim Mongolia is called land of horses where the number of horses outnumber humans, with 4.093 million horses compared to 3.35 million humans. A horse can only survive about five days without water Horses can eat bananas whole, peel and all, but it is recommended to cut them into bite-sized pieces to reduce the risk of choke the average horse weight is between 900 and 1,200 pounds",
    date:"2024-9-21",
    image :"/images/horsebrown.jpg",

  },

  {
    id : "5",
    title : "Information About Panda ",
    description: "Giant pandas are good swimmers and excellent tree climbers At 5 months old giant panda cubs learn how to climb sometimes practicing by climbing on their mum Giant pandas spend 10-16 hours a day feeding mainly on bamboo An adult female panda weighs 200 poundsPandas are shy they don't venture into areas where people live. This restricts pandas to very limited areas.They estimate that lifespan is about 15-20 years for wild pandas and about 30 years for those in human care. Chinese scientists have reported zoo pandas as old as 35 Pandas have excellent camouflage for their habitatPandas are so popular because they are incredibly cute and cuddly looking Pandas play an important role in the forest ecosystem where they live.Pandas can climb as high as 13,000 feet and are also very good swimmersA panda's daily diet consists almost entirely of the leaves, stems and shoots of various bamboo species giant panda can stand on two legs.Red pandas are very agile and can jump 1.5 m from branch to branch. They descend trees headfirst and display their flexibility as they move between branchesPandas normally give birth to single young",
    date:"2024-11-28",
    image :"/images/panda2.jpg",

  },

  {
    id : "6",
    title : "Information About Dog",
    description: "Dogs are the most popular pet on the planet They can learn over 100 words and gestures Dog noses are at least 40x more sensitive than our Many work as assistance dogs, helping humansSome dogs are incredible swimmersSome are fast and could even beat a cheetah!Dogs have 18 muscles controlling their ears. Dogs are about as intelligent as a two-year-old, a dog's normal vision is most like a person who has red-green color blindness. No further degrees of color blindness have been recorded in dogs Dogs are special because of their loyalty, companionship, and emotional intelligence. They form deep bonds with humans, offering unconditional love and often sensing their owners emotions  providing comfort during tough times the greyhound is the fastest dog breed in the world, capable of reaching a top speed of 45 mph ",
    date:"2024-11-28",
    image :"/images/gytt.jpg",

  },
  {
    id : "7",
    title : "Information About Cat",
    description: "The record for the longest cat ever is 48.5 inches The richest cat in the world had 7-million-poundCats walk like camels and giraffesThe oldest cat in the world was 38 years old!. Didga the cat can perform 24 tricks in one minute Cats have 230 bones adult cats need 15 hours or less  Cats have better night vision than humans and most other animals Activity/playfulness Fearfulness.Aggression towards humans.Sociability towards humans.Sociability towards cats.Litterbox issues.Excessive grooming..Wet fur is extremely uncomfortable for a catCats can cry or yowl for a range of reasons : A variety of fish, such as salmon, trout, tuna and whitefish. Poultry like chicken, turkey and pheasant Cats have the largest eyes relative to their head size of any mammal Cats are believed to be the only mammals who donot taste sweetness They have fur that's pleasing to touch",
    date:"2024-11-28",
    image :"/images/catty.jpg",

  },
  {
    id : "8",
    title : "Information About Zebra ",
    description: "Their black and white stripes are unique and are as distinctive as human fingerprints.Each individual has its own unique striped pattern when they born only six minutes after  foals can stand after 20 minutes they can walk and from 40 minutes to an hour they can run They mostly eat grass, but can also eat bark, fruit and leaves and spend most of their time grazing (approximately 60%)zebra needs less water Zebras can fall asleep standing up other intersting fact  no two zebras in the world are ever the same! zebras are very intelligent creature Zebras have amazing eyesight zebras live for approximately 20 years in the wild, and up to 40 years in zoos zebra have long muzzles with 40-42 teeth Zebras are large single hoofed animals adapted for speed and long distance migrations Zebras hug as a way of relaxing and looking out for predators in any direction",
    date:"2024-11-28",
    image :"/images/zebra.jpg",

  },
  {
    id : "9",
    title : "Information About Cow",
    description: "Cows can sleep while standing they can see almost 360 degrees Cows are very social and don't like to be alone Cows have no upper front teethCows love almost any kind of root vegetable, but especially carrots cow only see two colours which is yellow and blue they only sleep about four hours per day Cows are highly sensitive, social, and unique animals to control bulls and occasionally cows, and to help wean young cattle by preventing suckling the natural life span of a cow is 15-20 years,Goats are known as the poor man cow because they require lesser investment and are cheaper to rear mature cattle may consume up to 2 gallons of water per 100 lb of body weight Cows are emotional social animals who make and keep best friends, love physical affection show an appreciation for music and are deeply curious about other creatures and the world around them",
    date:"2024-11-28",
    image:"/images/twocows.jpg",

  },
 ];
    
 

export default  async function Page ({ params } : {params: Promise < {id: string}>;
}) {
   const resolvedParams =await params;// resolve the promise
   const { id } = resolvedParams;
   const Post = posts.find((p) => p.id === id);

   if (!Post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found</h2>
    );
   }
const renderParagraphs = (description: string) => {
  return description.split("/n").map((para, index) => (
    <p key={index} className="mt-4 text-justify">
      {para.trim()}
    </p>
  ));
};

return (
  <div className="max-w-3xl mx-auto p-5">
    <h1 className=" md:text-4xl text-3xl font-bold text-amber-700 text-center"> 
      { " " }
      {Post.title}
      </h1>

  {Post.image && (
    <img
    src={Post.image} 
    alt={Post.title} 
    className="w-full h-auto rounded-md mt-4"
    />
  )}
  <div className="mt-6 text-lg text-slate-700">
    {renderParagraphs(Post.description)}

  </div>

     <CommentSection postId={Post.id} />
    <AuthorCard/>

    
  </div>
)};
