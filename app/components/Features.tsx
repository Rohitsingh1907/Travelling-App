import Image from "next/image";

interface featuresprops {
  image:string;
  title:string;
  content:string;
}
const Para = ({image,title,content}:featuresprops) => {
  return(
    <div className="px-3  pb-5 max-w-[320px] mb-10 px-5">
      <Image src={image} alt="image" width={28} height={28} className="bg-green-50 rounded-full max-w-[50px] pb-5 mb-3"/>
      <h2 className="regular-20 font-mono pb-5 mb-1">{title}</h2>
      <p className="regular-16 text-gray-30 font-serif pb-5 mb-3">{content}</p>
    </div>
  )
}
const Features = () => {
  return (
    <div>
      <h1 className="regular-20 lg:regular-24 bold-40 lg:bold-64 flex justify-center mb-10 font-thin  ">Our Features</h1>
      <div className="lg:flex lg:flex-row">
        <Para image="/img-1.png" title="Real Maps Can Be Offline" content = "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location" />
        <Para image="/img-1.png" title="Set An Adventure Schedule" content="Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion" />
        <Para image="/img-2.png" title="Technology Using Augment Reality" content="Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection" />
        <Para image="/img-2.png" title="Many New Locations Every Month" content="Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing" />
      </div>
    </div>
  )
}

export default Features
