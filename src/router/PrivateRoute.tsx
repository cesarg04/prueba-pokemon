import { Navigate, Outlet} from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux"
import { RootState } from "../store/store"
import { FC } from "react";


export const PrivateRoute:FC = () => {
    // El private route, lo utilizo como un guardia, que comprueba si el usuario esta autenticado
    const { authenticated } = useAppSelector((state: RootState) => state.main);

    return (authenticated === 'yes')
    ? <Outlet/>
    : <Navigate to={'auth/login'} />
}
