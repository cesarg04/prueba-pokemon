import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../hooks/useRedux"
import { RootState } from "../store/store"

export const PublicRoute = () => {

    const { authenticated } = useAppSelector((state:RootState) => state.main)

    return (authenticated === 'no')
    ? <Outlet/>
    : <Navigate to={'/'} />
}
