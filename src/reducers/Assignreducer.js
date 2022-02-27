import { createSlice } from '@reduxjs/toolkit'
export const assignSlice = createSlice({
  name: 'Assign Teacher',
  initialState: [],

  reducers: {
    addassign: (state, action) => {
      state.push({ teachername: action.payload.t, batchname: action.payload.b })
    },
    deleteassign: (state) => {},
  },
})

export const { addassign, deleteassign } = assignSlice.actions
export default assignSlice.reducer
