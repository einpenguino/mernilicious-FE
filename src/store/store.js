import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import authRedux from './features/isAuth'

export default configureStore({
  reducer: {
    auth : authRedux
  },
})