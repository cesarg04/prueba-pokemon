import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

export const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className=" w-full px-5 md:px-20 my-10" >
                <Outlet />
            </div>
        </div>
    )
}
