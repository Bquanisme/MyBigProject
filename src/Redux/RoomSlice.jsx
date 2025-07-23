import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rooms: [],
    allRooms: [],
    selectedCategory: '',
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom(state, actions) {
        state.rooms = actions.payload
    },
    setAllRooms(state, actions) {
      state.allRooms = actions.payload; 
      state.rooms = actions.payload;
    },
    setSelectedCategory(state, actions) {
        state.selectedCategory = actions.payload
    },
    resetRooms: (state) => {
        state.rooms = state.allRooms;
    }
  },
})

export const { setRoom, setSelectedCategory, resetRooms, setAllRooms } = roomSlice.actions
export default roomSlice.reducer