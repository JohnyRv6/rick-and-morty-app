import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1
}

export const paginationSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.value += 1
    },
    decrementPage: (state) => {
      state.value -= 1
    }
  }
})

export const { incrementPage, decrementPage } = paginationSlice.actions

export default paginationSlice.reducer
