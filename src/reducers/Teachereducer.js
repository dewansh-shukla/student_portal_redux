import { createSlice } from '@reduxjs/toolkit'
export const teacherSlice = createSlice({
  name: 'teacher',
  initialState: [],
  reducers: {
    addteacher: (state, action) => {
      state.push({
        name: action.payload.name,
        subject: action.payload.sub,
      })
    },
  },
})

export const { addteacher, deleteteacher } = teacherSlice.actions
export default teacherSlice.reducer
