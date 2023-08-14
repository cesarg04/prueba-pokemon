import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

// Este hook esta recomendado en la documentacion de reduz toolkit cuando se usa typescript, su funcion es ayudar
// con el tipado cuando a la hora de obtener el state o invocar una funcion de redux en un componente
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector