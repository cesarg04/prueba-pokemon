import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import { PokemonByName } from "../../types/Pokemons"

const getPokemon = async (name?: string) => {
    const { data } = await api.get<PokemonByName>(`pokemon/${name}`)
    return data
}


export const useGetPokemonByName = (name?: string) => {

    const getPokemonName = useQuery(
        ['pokemonByName', name],
        () => getPokemon(name),
        {
            // Esta condicional, es para desactivar la peticion, si el nombre no existe, o no es pasado por parametro
            enabled: name !== undefined
        }
    )

    return {
        getPokemonName
    }
}
