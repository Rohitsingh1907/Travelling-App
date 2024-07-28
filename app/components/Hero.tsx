import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className="hero-map" />
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <div className="flex flex-row">
                <div className="pt-20 pr-5">
                    <h1 className="bold-52 lg:bold-88">Let's go on a Trip</h1>
                    <p className="regular-20 mt-6 text-gray-30 xl:max-w-[520px]">We are here with you to provide the best trip planning and guiding you to ensure safe & memorable journey. We will make a plan for your trip including residency , travelling and fun.</p>
                    <div className="my-11 flex flex-wrap gap-5">
                        <div className="flex items-center gap-2">
                        <Image src="/star.png" alt="star" width={220} height={220}/>
                        <h3 className=" bold-16 lg:bold-20 gap-3">198K Visits</h3>
                        <span className="regular-20 lg:regular-24 ml-1 bold-10 ">Recommended by Ixigo</span>
                    </div> <br />
                    <div className="lg:flexCenter hidden cursor-pointer">
                        <Button type="button" title="Download App" variant="btn_green"/>
                        <Button type="button" title="How We Work ?" variant="btn_white_text"/>
                    </div>
                </div>
            </div>
            <Image src="/traacel-1.png" alt="travelling" width={400} height={250} className="hidden md:block border border-r5"/>
            </div>
            
        </div>
    </section>
  )
}

export default Hero
