import { useEffect } from "react";
import { AppRouter } from "./router/AppRouter";
import { useAppDispatch } from "./hooks/useRedux";
import { Authenticate } from "./store/main/Thunk";

function App() {

  const dispatch = useAppDispatch()

  // Este useffect es para ver si hay una sesion activa, por ejemplo si recargamos la pagina, entonces no habra necesidad
  // de volver a autenticarse

  useEffect(() => {
    const user = localStorage.getItem('current_user')
    if (user) {
      dispatch(Authenticate('yes'))
    }

  }, [])
  
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
