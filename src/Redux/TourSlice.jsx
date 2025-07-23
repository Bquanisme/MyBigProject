import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    tours: [] ,
    allTours: [],
    selectedCategory: '',
}

const TourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setTour(state, actions) {
        state.tours = actions.payload
    },
    setAllTours(state, actions) {
      state.allTours = actions.payload; 
      state.tours = actions.payload;
    },
    setSelectedCategory(state, actions) {
        state.selectedCategory = actions.payload
    },
    resetTours: (state) => {
        state.tours = state.allTours;
    }
  },
})

export const { setTour, setAllTours, setSelectedCategory, resetTours } = TourSlice.actions
export default TourSlice.reducer