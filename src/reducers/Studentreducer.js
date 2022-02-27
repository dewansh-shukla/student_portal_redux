import { createSlice } from '@reduxjs/toolkit'
export const studentSlice = createSlice({
  name: 'student',
  initialState: [],

  reducers: {
    addstudent: (state, action) => {
      state.push({ name: action.payload })
    },
    deletestudent: (state) => {},
  },
})

export const { addstudent, deletestudent } = studentSlice.actions
export default studentSlice.reducer
