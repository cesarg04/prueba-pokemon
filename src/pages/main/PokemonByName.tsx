import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useGetPokemonByName } from "../../hooks/main/useGetPokemonByName"
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useEffect, useMemo } from "react"
import { AddFavoriteButton } from "../../components/AddFavoriteButton"

export const PokemonByName = () => {
    const navigate = useNavigate()
    const { name } = useParams()    
    const { pathname } = useLocation();
    const { getPokemonName } = useGetPokemonByName(name)
    const pokemon = useMemo(() => getPokemonName.data, [getPokemonName.data])

    // Este useffect es para que a la hora de entrar a esta vista, la pagina haga un scroll hacia arriba
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <>
        <Button
            color="success"
            className="mb-5 font-semibold text-white"
            onClick={() => navigate(-1)}
        >   
        {'< Ir a atras'}
        </Button>
        <div className="flex gap-5 flex-col md:flex-row" >
            <div className="md:basis-3/12" >
                <Card isHoverable className="p-5">

                    <Image
                        src={pokemon?.sprites.other?.dream_world.front_default || 'no-umahe'}
                        // shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={pokemon?.name}
                        className="w-full  h-[300px] "
                    />
                </Card>
            </div>

            <div className="md:basis-9/12" >
                <Card className="px-5 py-5" >
                    <CardHeader className="flex justify-between flex-col md:flex-row" >
                        <h1 className="font-main text-5xl font-bold" >{pokemon?.name.toUpperCase()}</h1>
                       <AddFavoriteButton
                            dataPokemon={{ name: pokemon?.name || '', url: pokemon?.location_area_encounters || '' }}
                       />
                    </CardHeader>
                    <CardBody>
                        <h1 className="font-main text-3xl font-semibold" >Otras imagenes</h1>
                        <div className="flex" >
                            <Image
                                src={pokemon?.sprites.front_default}
                                alt={pokemon?.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon?.sprites.back_default}
                                alt={pokemon?.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon?.sprites.front_shiny}
                                alt={pokemon?.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon?.sprites.back_shiny}
                                alt={pokemon?.name}
                                width={100}
                                height={100}
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
        </>
    )
}
