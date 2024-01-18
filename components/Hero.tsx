"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Browse and learn about all of your favorite plants!
                </h1>

                <p className="hero__subtitle">
                    Discover new flowers and plants to inspire you for your next gardening day! 
                </p>

                <CustomButton 
                    title="Explore Plants"
                    containerStyles="bg-sage-green text-white border border-sage-green-100 rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image 
                        src="/hero.png"
                        alt="plant hero image"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay"/>
            </div>
        </div>
    )
}

export default Hero