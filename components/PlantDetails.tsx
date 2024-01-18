"use client"

import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";

import { PlantProps } from "@/types";

interface PlantDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    plant: PlantProps;
}

const PlantDetails = ({ isOpen, closeModal, plant }: PlantDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fized inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl
                                 bg-white p-6 text-left shadow-2xl transition-all flex flex-col">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-white rounded-full"
                                >
                                    <Image 
                                        src="/close.svg"
                                        alt="close"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </button>

                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                        <Image 
                                            src='/hero.png'
                                            alt="plant model"
                                            fill priority
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col gap-2">
                                    <h2 className="font-semibold text-3xl capitalize text-lime-950">
                                        {plant.plantName} 
                                        <p className=" text-base font-light italic text-sage-green-300">({plant.botanicalName})</p>
                                    </h2>

                                    <div className="mt-3 flex flex-wrap gap-4">
                                       {Object.entries(plant).filter(([key, value]) => key !== 'imageUrl' && key !== '_id' 
                                       && key !== '__v' && key !== 'botanicalName' && key !== 'plantName').map(([key, value]) => (
                                            <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                                <h4 className="capitalize text-lg text-sage-green-750">{key.split(/(?=[A-Z])/).join(" ")}</h4>
                                                <p className="text-lime-950">{value.replace(/[\[\]']+/g, '')}</p>
                                            </div>
                                       ))}         
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>   
        </>
    )
}

export default PlantDetails