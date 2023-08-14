import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import { Pokemons } from "../../types/Pokemons"


const getPokemonsApi = async (limit: number, offset: number) => {

    const { data } = await api.get<Pokemons>(`pokemon?limit=${limit}&offset=${offset}`)
        return data
}


export const useGePokemons = (limit: number, offset: number) => {

    const getPokemons = useQuery(
        ['pokemons', limit, offset],
        () => getPokemonsApi(limit, offset)
    )

    return {
        getPokemons
    }

}