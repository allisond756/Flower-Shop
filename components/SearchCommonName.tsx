"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { Combobox, Transition } from "@headlessui/react"

import { commonNames } from "@/constants"
import { SearchCommonNameProps } from "@/types"

const SearchCommonName = ({ commonName, setCommonName }: SearchCommonNameProps) => {
    const [query, setQuery] = useState('');

    const filteredCommonNames =
        query === ""
        ? commonNames
        : commonNames.filter((item) => (
            item.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        ))

    return (
        <div className="search-commonName">
            <Combobox value={commonName} onChange={setCommonName}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image 
                            src="/common-logo.svg"
                            alt="common name search logo"
                            width={20}
                            height={20}
                            className="ml-4"
                        />
                    </Combobox.Button>

                    <Combobox.Input 
                        className="search-commonName__input"
                        placeholder="Search Common Name"
                        displayValue={(commonName: string) => commonName}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition ease-in  duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options /* className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white 
                                py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20" static */>
                            {filteredCommonNames.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) => `
                                        relative search-commonName__option ${active ? 'bg-sage-green-200 text-white' 
                                        : 'text-gray-900'}`}
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'}`}
                                                >
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                        active ? 'text-white' : 'text-teal-600'}`}
                                                    >
                                                    </span>
                                        ) : null}  
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchCommonName