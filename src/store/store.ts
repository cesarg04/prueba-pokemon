import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './main/mainSlice';

// Esta es una store de Redux Toolkit, en este caso la aplicacion no requiere tantos modulos, pero aun asi lo utilizare.
// para probar que tengo conocimientos sobre la tecnologia

export const store = configureStore({
  reducer: {
    main: mainSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
