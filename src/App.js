import './App.css'
import { Grid } from '@mui/material'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Batch from './components/Batch'
import Assign from './components/Assign'
import Display from './components/Display'
import BatchList from './components/BatchList'
import TeacherList from './components/TeacherList'

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>School Portal</h1>
      <Grid container spacing={2} sx={{ marginTop: '20px', padding: '30px' }}>
        <Grid item xl={4} md={3}>
          <Student />
        </Grid>
        <Grid item xl={4} md={3} sm={12} lg={4} xs={12}>
          <Teacher />
        </Grid>
        <Grid item xl={4} md={3} sm={12} xs={12} lg={4}>
          <Display />
        </Grid>
        <Grid item xl={4} md={3} sm={12} xs={12} lg={4}>
          <Batch />
        </Grid>
        <Grid item xl={4} md={3} sm={12} xs={12} lg={4}>
          <Assign />
        </Grid>
        <Grid item xl={4} md={3} sm={12} xs={12} lg={4}>
          <TeacherList />
        </Grid>
        <Grid item xl={4} md={3} sm={12} xs={12} lg={4}>
          <BatchList />
        </Grid>
      </Grid>
    </>
  )
}

export default App
