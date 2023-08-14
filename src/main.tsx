import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { store } from './store/store';
import './index.css'
import { Provider } from 'react-redux'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'

const query = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Provider de redux toolkit */}
    <Provider store={store} >
      {/* El queryClient de react query, para manejar peticiones http */}
      <QueryClientProvider client={query} >
        <ReactQueryDevtools />
        {/* NextUI es un framework de Ui bastante poderoso */}
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark" >
            {/* El browser router es la configurtacion de react-router-dom para manejar las rutas de la aplicacion */}
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </NextThemesProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
