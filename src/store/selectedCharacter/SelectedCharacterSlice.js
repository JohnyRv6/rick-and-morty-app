import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {}
}

export const SelectedCharacterSlice = createSlice({
  name: 'SelectedCharacter',
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setCharacter } = SelectedCharacterSlice.actions

export default SelectedCharacterSlice.reducer
