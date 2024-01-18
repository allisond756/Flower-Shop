"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

import { CustomFilter, SearchCommonName } from "./"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-11 z-10 ${otherClasses}`}>
        <Image 
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
        />
    </button>
)

const SearchBar = () => {
    const [commonName, setCommonName] = useState('');
    const [botanicalName, setBotanicalName] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(commonName === '' && botanicalName === '') {
            return alert('Please fill in the search bar')
        }

        updateSearchParams(commonName.toLowerCase(), botanicalName.toLowerCase())
    }

    const updateSearchParams = (commonName: string, botanicalName: string) => {
        const searchParams = new URLSearchParams(window.location.search);

       if(commonName) {
            searchParams.set('plants', commonName)
        } else {
            searchParams.delete('plants')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname, {scroll:false})
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchCommonName
                    commonName={commonName}
                    setCommonName={setCommonName}
                />

                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <div className="searchbar__item">
                <Image 
                    src="/science-logo.svg"
                    alt="scientific name image"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input 
                    type="text"
                    name="scientific name"
                    value={botanicalName}
                    onChange={(e) => setBotanicalName(e.target.value)}
                    placeholder="Search Scientific Name"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses="max-sm:hidden"/>
        </form>
    )
}

export default SearchBar