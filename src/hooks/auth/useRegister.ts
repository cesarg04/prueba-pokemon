import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterFields } from "../../types/Auth"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../useRedux"
import { Authenticate } from "../../store/main/Thunk"

export const useRegister = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    // En este caso utilizare react-hook-form para el manejo de los formularios
    const { register, handleSubmit, formState: { errors }, setError } = useForm<RegisterFields>()


    const onSubmit: SubmitHandler<RegisterFields> = (data) => {
        let users: RegisterFields[] = []

        // Verificar si el usuario ya existe en el localStorage
        const user = localStorage.getItem('users')

        if (user) {
            const userData: RegisterFields[] = JSON.parse(user)
            // Comprobar si el usuario ya esta registrado
            const existUser = userData.find(us => us.email === data.email)
            if (existUser) {
                setError('root', { message: 'El correo ya existe' })
                return;
            }
            // Asignar los usuarios registrados en el localStorage a una variable
            users = userData
            users.push(data)
            localStorage.setItem('users', JSON.stringify(users))
            localStorage.setItem('current_user', JSON.stringify(existUser))
            dispatch(Authenticate('yes'))
            navigate('/')
        }else{
            users.push(data)
            localStorage.setItem('users', JSON.stringify(users))
            localStorage.setItem('current_user', JSON.stringify(data))
            dispatch(Authenticate('yes'))
            navigate('/')
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
