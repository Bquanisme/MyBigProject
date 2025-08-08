import {configureStore} from '@reduxjs/toolkit'
import RoomReducer from './RoomSlice'
import TourReducer from './TourSlice'
import AuthReducer from './ReduxAuth/Slice/authSlice'
import roomTourReducer from './ReduxAuth/Slice/roomTourSlice'

export const store = configureStore({
    reducer: {
        room: RoomReducer,
        tour: TourReducer,
        auth: AuthReducer,
        roomTour: roomTourReducer,
    }
})