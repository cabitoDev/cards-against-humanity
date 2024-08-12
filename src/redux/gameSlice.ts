import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
  name: 'game',
  initialState: null,
  reducers: {
    updateGame: (state, action) => {
      return action.payload
    }
  }
})

export const { updateGame } = gameSlice.actions

export default gameSlice.reducer
