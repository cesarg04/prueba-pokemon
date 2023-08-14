import { useEffect, useState } from "react"
import { Result } from "../../types/Pokemons"
import { useParams } from "react-router-dom"

export const useAddPokemonToFavorite = () => {
    // Extraigo el nombre del pokemon
    const { name } = useParams()
    // Esto es para comprobar si ya esta en favoritos
    const [isInFavorites, setisInFavorites] = useState(false)
    // Aqui tenemos todos los pokemones favoritos extraidos del localStorage
    const [pokemonsFavorites, setPokemonsFavorites] = useState<Result[]>()
    // Este state guarda el nombre del pokemon que se esta agregando a favoritos, esto me da una dependencia para 
    // actualizar el useffect, y que a la hora de agregar un pokemon en favorito, el state se actualice y el boton cambie
    const [currentPoke, setCurrentPoke] = useState('')

    useEffect(() => {
        const favoritesPokemons = localStorage.getItem('favorites_pokemons')
        // Comprobando si existen pokemones en el localStorage
        if (favoritesPokemons) {
            const pokemons: Result[] = JSON.parse(favoritesPokemons)
            setPokemonsFavorites(pokemons)
            const existPokemon = pokemons.find(poke => poke.name === name)

            if (existPokemon) {
                setisInFavorites(true)
            }

        }
    }, [currentPoke, name])

    
    const AddPokemonToFavorite = (dataPokemon: Result) => {

        let pokemons: Result[] = []

        // El boton tendra doble funcion, cuando este en favoritos, se podra eliminar de la lista desde el mismo boton
        if (isInFavorites) {
            const deleteFavotitePokemon = pokemonsFavorites?.findIndex(pokemon => pokemon.name === dataPokemon.name);
            if (deleteFavotitePokemon !== -1) {
                const pokeDeleted = pokemonsFavorites?.filter(pokemon => pokemon.name !== name);
                setPokemonsFavorites(pokeDeleted)
                localStorage.setItem('favorites_pokemons', JSON.stringify(pokeDeleted))
            }
            setCurrentPoke('deleting')
            setisInFavorites(false)
            return;
        }


        const pokemonsInStorage = localStorage.getItem('favorites_pokemons' || '[]')
        if (pokemonsInStorage) {
            const pokes: Result[] = JSON.parse(pokemonsInStorage)
            pokemons = pokes
            pokemons.push(dataPokemon)
            localStorage.setItem('favorites_pokemons', JSON.stringify(pokemons))
            setCurrentPoke('adding')
        } else {
            pokemons.push(dataPokemon)
            localStorage.setItem('favorites_pokemons', JSON.stringify(pokemons))
            setCurrentPoke(dataPokemon.name)
        }
    }

    return {
        isInFavorites,
        AddPokemonToFavorite,
        pokemonsFavorites
    }
}
