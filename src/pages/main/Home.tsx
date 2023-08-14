import { useEffect, useMemo, useState } from "react"
import { useGePokemons } from "../../hooks/main/useGetPokemons"
import { PokemonCard } from "../../components/PokemonCard"
import { Pagination } from "@nextui-org/react"

export const Home = () => {
    const [offset, setOffset] = useState(1)

    // Aqui le estoy pasado los campos de la pagincion
    const { getPokemons } = useGePokemons(52 ,offset)
    const pokemons = useMemo(() => getPokemons.data?.results, [getPokemons.data])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [offset]);

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5 " >

                {
                    pokemons?.map((poke, index) => (
                        <PokemonCard
                            pokeData={poke}
                            key={index}
                            id={index + 1}
                        />
                    ))
                }

            </div>
            <div className="w-full my-5 min-h[50px]" >
                <Pagination
                    total={getPokemons.data?.count || 1}
                    initialPage={offset}
                    size="md"
                    
                    onChange={() => {
                        setOffset(offset + 52)
                    }}
                />

            </div>

        </>
    )
}
