
import authSlice from '@/slices/authSlice'
import authorsSlice from '@/slices/authorsSlice'
import bagSlice  from '@/slices/bagSlice'
import categorySlice from '@/slices/categorySlice'
import componentsSlice from '@/slices/componentsSlice'
import followSlice from '@/slices/followSlice'
import loggedInSlice from '@/slices/loggedIn'
import ordersSlice from '@/slices/ordersSlice'
import paymentSlice from '@/slices/paymentSlice'
import purchaseSlice from '@/slices/purchaseSlice'
import templateSlice from '@/slices/templateSlice'
import userSlice  from '@/slices/userSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      templates : templateSlice,
      categories: categorySlice,
      bag : bagSlice,
      user : userSlice,
      auth: authSlice,
      follow: followSlice,
      components: componentsSlice,
      authors: authorsSlice,
      loggedIn: loggedInSlice,
      payment: paymentSlice,
      purchase: purchaseSlice,
      orders: ordersSlice,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']