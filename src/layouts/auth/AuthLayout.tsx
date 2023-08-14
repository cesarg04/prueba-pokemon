import { Outlet } from "react-router-dom"

// Este es el Layout de la autenticacion, las rutas de la auth pasaran por este componete padre

export const AuthLayout = () => {
  return (
    <div className="min-w-full flex justify-center content-center items-center self-center h-screen" >
        <Outlet/>
    </div>
  )
}
