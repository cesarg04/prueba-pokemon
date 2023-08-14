import { useMemo } from "react"
import { Input } from "@nextui-org/react"
import { useGePokemons } from "../../hooks/main/useGetPokemons"
import { PokemonCard } from "../../components/PokemonCard"
import { useCustomForm } from "../../hooks/main/useForm"

export const SearchPage = () => {
    const { getPokemons } = useGePokemons(1200, 1)
    const pokemons = useMemo(() => getPokemons.data?.results, [getPokemons.data])

    // En este caso opte por utilizar un custom Hook para manejar el Input de busqueda
    // El api no cuenta con busqueda por endpoints, asi que tube que cargar la mayor parte de los pokemones
    // y filtrarlos en codigo, lo que podria no ser lo mas optimo

    const { onChange, key } = useCustomForm({
        key: ''
    })

    return (
        <>
            <div className=" w-full" >
                <div className="w-full flex justify-center flex-col" >
                    <Input
                        type="text"
                        placeholder="Buscar pokemon"
                        variant="bordered"
                        className="max-w-full"
                        size="lg"
                        onChange={
                            ({ target }) => onChange(target.value, 'key')
                        }
                    />
                </div>
                {
                    key
                }

                <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5 my-10" >
                    {
                        (key.length > 0)
                            ? pokemons?.filter(poke => poke.name.toLowerCase().includes(key.toLowerCase()))?.map((poke, index) => (
                                <PokemonCard
                                    id={index + 1}
                                    pokeData={poke}
                                    key={index}
                                />
                            ))
                            : <p className="text-xl" >Para realizar una busqueda, ingrese el nombre del pokemon que desea buscar</p>

                    }
                </div>
            </div>
        </>
    )
}
