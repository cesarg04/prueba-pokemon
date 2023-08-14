import { Button, Input } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { useLogin } from "../../hooks/auth/useLogin"

export const Login = () => {

    const { register, handleSubmit, onSubmit, errors } = useLogin()

    return (
        <div
            className="
            w-[500px] min-h-[400px] px-8 rounded-2xl 
            flex  items-center
            shadow-lg flex-col
            content-center
            " >
            <h1 className="text-4xl font-main font-bold text-blue-500 " >Iniciar sesion</h1>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

                <div className="mt-10 w-full flex flex-col gap-10" >
                    <Input
                        type="email"
                        label="Correo Electronico"
                        labelPlacement={'outside'}
                        size="lg"
                        color={errors.email ? 'danger' : 'default'}
                        {...register('email', { required: true })}
                    />
                    <Input
                        type="password"
                        label="Contraseña"
                        labelPlacement={'outside'}
                        size="lg"
                        color={errors.password ? 'danger' : 'default'}
                        {...register('password', { required: true, minLength: 8 })}
                    />

                    <Button
                        color="primary"
                        type="submit"
                    >
                        Iniciar Sesion
                    </Button>

                    {
                            errors.root?.message && <p className="text-red-500">{errors.root.message}</p>
                    }

                    <Link
                        className="hover:underline text-blue-500"
                        to={'/auth/register'} >
                        No tienes una cuenta? Registrate
                    </Link>

                </div>
            </form>

        </div>
    )
}
