import { CustomFilter, Hero, PlantCard, SearchBar } from '@/components'
import { fetchPlants } from "@/utils";
import Image from 'next/image'

export default async function Home({ searchParams }: any) {
  const allPlants = await fetchPlants({
    commonName: searchParams.commonName || '',
  });

  const isDataEmpty = !Array.isArray(allPlants) || allPlants.length < 1 || !allPlants;



  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Search Plants</h1>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <section>

            </section>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__plants-wrapper">
              {allPlants?.map((plant) => <PlantCard plant={plant}/>)}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allPlants?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
