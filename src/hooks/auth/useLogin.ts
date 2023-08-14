import { SubmitHandler, useForm } from "react-hook-form"
import { LoginFields, RegisterFields } from "../../types/Auth"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../useRedux"
import { Authenticate } from "../../store/main/Thunk"

export const useLogin = () => {
    
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFields>() 
    const dispatch = useAppDispatch()

    const onSubmit:SubmitHandler<LoginFields> = (data) => {

        // Verificar si el usuario ya existe en el localStorage
        const user = localStorage.getItem('users')
        
        if (user) {
            const userData: RegisterFields[] = JSON.parse(user)

            // Comprobar si el usuario ya esta registrado
            const existUser = userData.find(us => us.email === data.email)
            if (!existUser) {
                setError('root', { message: 'El usuario no existe' }) 
                return;
            }

            // Comprobar si la Contraseña es correcta
            if (existUser.password !== data.password) {
                setError('root', { message: 'Contraseña incorrecta' })
                return
            }
            localStorage.setItem('current_user', JSON.stringify(existUser))
            dispatch(Authenticate('yes'))
            navigate('/')
        }
        else{
            setError('root', { message: 'El usuario no existe, registrese' })
        }

    }

    return {
        register,
        handleSubmit,
        errors,
        setError,
        onSubmit
    }
}
