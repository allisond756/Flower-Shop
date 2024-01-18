import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchCommonNameProps {
    commonName: string;
    setCommonName: (commonName: string) => void;
}

export interface PlantProps {
    botanicalName: string;
    plantName: string;
    description: string;
    flowerColor: string;
    foodNutrients: string;
    nativeRegion: string;
    growthHabits: string;
    waterRequirements: string;
    bloomingTimes: string;
    plantHeight: string;
    imageUrl: string;
}

export interface FilterProps {
    commonName: string;
}