import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, } from "@nextui-org/react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAppDispatch } from "../hooks/useRedux";
import { Authenticate } from "../store/main/Thunk";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('current_user')
        dispatch(Authenticate('no'))
        navigate('auth/login')
    }

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link to={'/'} >
                        <p className="font-bold text-inherit">POKEMON</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link to={'/'} >
                        <p className="font-bold text-inherit">POKEMON</p>
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link to={'/favorites'}>
                        Favoritos
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link to={'/search'} aria-current="page">
                        Busqueda
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        onClick={() => {
                            logout()
                        }}
                        color="warning"
                        variant="flat"
                    >
                        Cerrar sesion
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>

                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        to={'/favorites'}
                    >
                        Favoritos
                    </Link>
                </NavbarMenuItem>
                
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        to={'/search'}
                    >
                        Busqueda
                    </Link>
                </NavbarMenuItem>
                

            </NavbarMenu>
        </Navbar >
    )
}
