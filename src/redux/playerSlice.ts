import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: null,
  reducers: {
    updatePlayer: (state, action) => {
      return action.payload
    }
  }
})

export const { updatePlayer } = playerSlice.actions

export default playerSlice.reducer
