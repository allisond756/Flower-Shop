"use client"

import { useState } from "react"
import Image from "next/image"

import { PlantProps } from "@/types"
import { CustomButton, PlantDetails } from "."


interface PlantCardProps {
    plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
    const { waterRequirements, plantHeight, growthHabits, flowerColor, plantName, botanicalName, imageUrl } = plant;

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="plant-card group outline-4 outline-sage-green-500 outline-double hover:outline-none 
            hover:border-2 hover:border-sage-green-700">
            <div className="plant-card__content">
                <h2 className="plant-card__content-title">
                    {plantName}
                </h2>
            </div>

            <p>
                <span className="italic">
                    ({botanicalName})
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image 
                    src='/plant_placeholder.png'
                    alt="plant placeholder"
                    fill priority
                    className="object-contain"
                />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-between items-center gap-2">
                        <Image 
                            src="/height.svg"
                            alt="measuring tape"
                            width={40}
                            height={40}
                        />
                        <p className="text-[13px]">{plantHeight}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center ">
                        <Image 
                            src="/water.svg"
                            alt="watering can"
                            width={40}
                            height={40}
                        />
                        <p className="text-[13px]">{waterRequirements}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center ">
                        <Image 
                            src="/sun.svg"
                            alt="sun"
                            width={40}
                            height={40}
                        />
                        <p className="text-[13px] capitalize">{growthHabits.replace('or perennial' || 'or annual', '')}</p>
                    </div>
                </div>

                <div className="plant-card__btn-container">
                    <CustomButton 
                        title="View More"
                        containerStyles="w-full py-[16px] rounded-full bg-lime-900 shadow-xl"
                        textStyles="text-white text-[14px] leading-[17px] font-medium"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <PlantDetails 
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                plant={plant}
            />
        </div>
    )
}

export default PlantCard