import Image from "next/image"

const Guide = () => {
  return (
    <>
    
    <div className="padding-container max-container w-full pb-24">
      <p className=" uppercase regular-16 text-green-50 ">We are here for you</p>
      <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] font-mono">Guide you to easy path</h2>
        <p className="regular-16 xl:regular-16 text-grey-30 xl:max-w-[520px] font-serif bg-green-300 p-10 lg:p-20 xl:p-20 rounded-2xl">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
      </div>
      </div>
      <div>
        <Image src="/img-2.png" alt="image" width={28} height={28} className="w-full" />
        <div className="bg-gray-10 border-red-300 max-w-[400px] p-5 rounded:3xl">
          <p className="regular-16 bold-20 ">Start Track</p>
          <p className="regular-16 bold-20 text-gray-30">Nanital</p><br /><br />
          <p className="regular-16 bold-20 ">Destination</p>
          <p className="regular-16 bold-20 text-gray-30">Ladakh</p><br />
          <p className="regular-16 bold-20 align-middle items-center justify-between">Total time  : 48 min </p>
        </div>
      </div><br /><br /><br />
      <hr />
      </>
  )
}

export default Guide
