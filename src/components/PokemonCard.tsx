import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { Result } from "../types/Pokemons"
import { FC, useMemo } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    pokeData: Result
    id: number
}

export const PokemonCard: FC<Props> = ({ pokeData, id }) => {
    // Este Hook es utilizado para redireccionar a otra ruta en la aplcicacion  
    const navigate = useNavigate()

    // Este memo parece complicado, pero su funcion es extraer el ID del pokemon desde la url, ya que 
    // en el endpoint no viene esa data, dicho id lo utilizo para presentar la imagen.
    const pokeminRealId = useMemo(() => pokeData.url.split('/')[pokeData.url.split('/').length - 2], [pokeData])


    return (
        <Card shadow="sm" isPressable onPress={() => navigate(`/pokemon/${ pokeData.name }`)}>
            <CardBody className="overflow-visible p-0">
                <Image
                    // shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={pokeData.name}
                    className="w-full  h-[200px]"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeminRealId}.svg`}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{pokeData.name}</b>
                <p className="text-default-500">{id}</p>
            </CardFooter>
        </Card>
    )
}
