import { Button, Input } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { useRegister } from "../../hooks/auth/useRegister"


export const Register = () => {

    const { register, handleSubmit, onSubmit, errors } = useRegister()

    return (
        <div>
            <div
                className="
                    w-[500px] min-h-[500px] px-8 rounded-2xl
                    flex  items-center
                    shadow-lg flex-col
                    content-center
            " >
                <h1 className="text-4xl font-main font-bold" >Crear Cuenta</h1>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)} >

                    <div className="mt-10 w-full flex flex-col gap-10" >
                        <Input
                            type="text"
                            label="Nombre completo"
                            labelPlacement={'outside'}
                            size="lg"
                            color={errors.name ? 'danger' : 'default'}
                            {...register('name', { required: true })}
                        />
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
                            Registrar
                        </Button>
                        {
                            errors.root?.message && <p className="text-red-500">{errors.root.message}</p>
                        }
                        <Link
                            className="hover:underline text-blue-500"
                            to={'/auth/login'} >
                            ¿Tienes una cuenta? Inicia Sesion
                        </Link>

                    </div>
                </form>


            </div>
        </div>
    )
}
