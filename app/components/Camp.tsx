import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface campProps {
  backgroundImage:string;
  title:string;
  location:string;
  peopleJoined:string;
}
const CampSite = ({backgroundImage , title , location , peopleJoined}:CampProps) => {
  return (
    <div className={`h-full w-full min-w[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/location.png" alt="location" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{location}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url)=> (
              <Image className="border rounded-full inline-block h-10 w-10" src={url} key={url} alt="persons" width={52} height={52} />
            ))
              
            }
          </span>
          <p className="regular-16 bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 mx-5 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite backgroundImage = "bg-bg-img-1" title="Mountain Trek" location="Nainital , Uttrakhand" peopleJoined="50+ Joined"/>
        <CampSite backgroundImage = "bg-bg-img-2" title="Forest Camping" location="Ooty , Tamil Nadu" peopleJoined="42+ Joined"/>
        <CampSite backgroundImage = "bg-bg-img-2" title="Mountain Trek" location="Nainital , Uttrakhand" peopleJoined="50+ Joined"/>
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-40 lg:mr-6">
      <div className="bg-green-50 p-8  lg:max-w-[400px] xl:max-w-[634px] xl:rounded-5xl xl:px-16 relative w-full overflow-hidden rounded-3xl">
        <h2 className="regular-24 text-white bold-16 lg:regular-32 lg:bold-20 mb-2">Feeling Lost And Not Knowing The Way?</h2>
        <p className="regular-16 text-white bold-12 lg:regular-20 lg:bold:16">Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
      </div>
      </div>
    </section>
  )
}

export default Camp;
