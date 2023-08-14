import axios from "axios";

// Importando la variable de entiorno, en este caso la URL de la api de pokemon
const url = import.meta.env.VITE_URL

// En esta parte creo una instancia de Axios, para asi poder acceder a la data de los pokemones

export const api = axios.create({
    baseURL: url,
})

