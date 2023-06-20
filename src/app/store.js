import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../features/queries/pokeSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)