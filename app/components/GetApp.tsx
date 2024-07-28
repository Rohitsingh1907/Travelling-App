import Image from "next/image"

const GetApp = () => {
  return (
    <div className="bg-black xl:flex xl:flex-row xl:py-20 px-10">
      <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] text-white pl-3 pt-10 pb-0">Get for free now !</h2>
        <p className="regular-16 text-gray-10 pl-10">Available in iOS and Android</p>
        <div className="flex flex-col w-full whitespace-nowrap xl:flex-row px-20">
          <button className="flexCenter  gap-3 rounded-full border btn_white w-full xl:mr-5">App Store</button>
          <button className="flexCenter  gap-3 rounded-full border btn_dark_green_outline w-full">Play Store</button>
        </div>
      </div>
      <div className="felx flex-1 justify-end items-center">
        <Image src="/img-1.png" alt="phone" width={550} height={870} />
      </div>
    </div>
  )
}

export default GetApp
