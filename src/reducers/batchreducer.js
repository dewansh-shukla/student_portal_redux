import { createSlice } from '@reduxjs/toolkit'
export const batchSlice = createSlice({
  name: 'batch',
  initialState: [],

  reducers: {
    addbatch: (state, action) => {
      let i = state.findIndex((b) => b.id === action.payload.b)
      if (i === -1) {
        state.push({ number: action.payload.n, id: action.payload.b })
      }
    },
    addStudentsToBatch: (state, action) => {
      state[state.length - 1] = {
        ...state[state.length - 1],
        students: action.payload,
      }
    },
    assignTeacher: (state, { payload: { id, teacher, subject } }) => {
      let i = state.findIndex((b) => b.id === id)
      state[i]['teacher'] = teacher
      state[i]['subject'] = subject
    },
    deletebatch: (state) => {},
  },
})

export const { addbatch, deletebatch, addStudentsToBatch, assignTeacher } =
  batchSlice.actions
export default batchSlice.reducer
