import Link from "next/link"
import Image from "next/image"

import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image 
                        src="/plant-logo.svg"
                        alt="Plantastic logo"
                        width={60}
                        height={18}
                        className="object-contain mr-2"
                    />
                    <h2 className="text-2xl">Plantastic</h2>
                </Link>

                <CustomButton 
                    title="Sign In"
                    btnType="button"
                    containerStyles="bg-sage-green text-white border-2 border-white hover:bg-sage-green-100 
                        hover:text-sage-green-700 rounded-full min-w-[100px]"
                />
            </nav>
        </header>
    )
}

export default Navbar