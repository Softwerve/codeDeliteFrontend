
import { bagSlice } from '@/slices/bagSlice'
import { categorySlice } from '@/slices/categorySlice'
import { templateSlice } from '@/slices/templateSlice'
import { userSlice } from '@/slices/userSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      templates : templateSlice.reducer,
      categories: categorySlice.reducer,
      bag : bagSlice.reducer,
      user : userSlice.reducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']