import { configureStore } from '@reduxjs/toolkit'
import paginationSlice from './pagination/paginationSlice'
import SelectedCharacterSlice from './selectedCharacter/SelectedCharacterSlice'

export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    selectedCharacter: SelectedCharacterSlice
  }
})
