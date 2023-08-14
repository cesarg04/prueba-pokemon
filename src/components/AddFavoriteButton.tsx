import { Button } from "@nextui-org/react"
import { useAddPokemonToFavorite } from "../hooks/main/useAddPokemonToFavorite"
import { Result } from "../types/Pokemons"
import { FC } from "react"


interface Props{
    dataPokemon: Result
}


export const AddFavoriteButton:FC<Props> = ({ dataPokemon }) => {
    const { isInFavorites, AddPokemonToFavorite } = useAddPokemonToFavorite()
    return (
        <Button 
            radius="full" 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={
                () => AddPokemonToFavorite(dataPokemon)
            }
            >
                {
                    isInFavorites 
                    ? 'En favoritos'
                    : 'Guardar en Favoritos'

                }
        </Button>
    )
}
