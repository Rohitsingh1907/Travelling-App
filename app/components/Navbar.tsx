import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container
    padding-container relative z-30 py-5">
        <Image src="/travel-logo.png" alt="logo" width={74} height={45} />
        <Link href="/">
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key} className="regular-20 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </Link>
        <div className="lg:flexCenter hidden cursor-pointer">
                <Button type="button" title="LogIn" variant="btn_dark_green"/>
        </div>

        <Image
            src="/menu.png"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />

    </nav>
  )
}

export default Navbar
