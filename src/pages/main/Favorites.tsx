
import { PokemonCard } from "../../components/PokemonCard"
import { useAddPokemonToFavorite } from "../../hooks/main/useAddPokemonToFavorite"

export const Favorites = () => {

    // Como vemos, es posible reutilizar el customHook creado para los pokemones favoritos
    const { pokemonsFavorites } = useAddPokemonToFavorite()


    return (
        <>
            <h1 className="text-4xl font-main font-semibold pb-5" >Pokemones Favoritos</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5" >
                {
                    pokemonsFavorites?.reverse().map((poke, index) =>(
                        <PokemonCard 
                            id={index + 1}
                            pokeData={poke}
                            key={index}
                            />
                    ))
                }
            </div>
        </>
    )
}
