import { FilterProps, PlantProps } from "@/types";

export async function fetchPlants(filters: FilterProps) {
    const { commonName } = filters

    const headers = {
        'X-RapidAPI-Key': '42d5c113d2mshd00e5dd81cf299bp118dc0jsn03cee31ebb57',
		'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
    }

    const response = await fetch(`https://garden-api.p.rapidapi.com/plants?=${commonName}`, {
        headers: headers,
    });

    const result = await response.json();

    return result
}

