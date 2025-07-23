import {configureStore} from '@reduxjs/toolkit'
import RoomReducer from './RoomSlice'
import TourReducer from './TourSlice'
import AuthReducer from './ReduxAuth/Slice/authSlice'

export const store = configureStore({
    reducer: {
        room: RoomReducer,
        tour: TourReducer,
        auth: AuthReducer,
    }
})