import { configureStore } from '@reduxjs/toolkit'
import Studentreducer from './reducers/Studentreducer'
import Teacherreducer from './reducers/Teachereducer'
import Batchreducer from './reducers/batchreducer'
import Assignreducer from './reducers/Assignreducer'
export const store = configureStore({
  reducer: {
    students: Studentreducer,
    teachers: Teacherreducer,
    batches: Batchreducer,
    assign: Assignreducer,
  },
})
