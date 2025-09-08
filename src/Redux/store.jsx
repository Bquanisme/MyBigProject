import {configureStore} from '@reduxjs/toolkit'
import RoomReducer from './RoomSlice'
import TourReducer from './TourSlice'
import AuthReducer from './ReduxAuth/Slice/authSlice'
import roomTourReducer from './ReduxAuth/Slice/roomTourSlice'
import editUserReducer from './ReduxAuth/Slice/editUserSlice'
import reviewReducer from './ReduxAuth/Slice/reviewSlice'
import adminReducer from './ReduxAuth/Slice/adminSlice'

export const store = configureStore({
    reducer: {
        room: RoomReducer,
        tour: TourReducer,
        auth: AuthReducer,
        roomTour: roomTourReducer,
        editUser: editUserReducer,
        review: reviewReducer,
        admin: adminReducer,
    }
})