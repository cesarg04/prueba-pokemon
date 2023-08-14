import { Route, Routes } from "react-router-dom"
import { AuthLayout } from "../layouts/auth/AuthLayout"
import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"
import { MainLayout } from "../layouts/main/MainLayout"
import { Home } from "../pages/main/Home"
import { PokemonByName } from "../pages/main/PokemonByName"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { Favorites } from "../pages/main/Favorites"
import { SearchPage } from "../pages/main/SearchPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthLayout />} >
                <Route element={<PublicRoute />} >
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Route>

            <Route path="/" element={<MainLayout />} >
                <Route element={<PrivateRoute />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon/:name" element={<PokemonByName />} />
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="search" element={ <SearchPage/> } />
                </Route>
            </Route>
        </Routes>
    )
}
