import { Button, Card, CardContent, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { assignTeacher } from '../reducers/batchreducer'
import { useSelector } from 'react-redux'
function Assign(props) {
  const [teacher, setTeacher] = useState('')
  const [batch, setBatch] = useState('')
  const { teachers } = useSelector((state) => state)
  const dispatch = useDispatch()
  const handlesubmit = (event) => {
    event.preventDefault()
    if (batch.trim().length === 0 && teacher.trim().length === 0) {
      alert('Enter valid value')
      return
    }
    let _teacher = teachers.find((x) => x.name === teacher)
    if (_teacher) {
      dispatch(
        assignTeacher({
          teacher: teacher,
          id: batch,
          subject: _teacher.subject,
        })
      )
      setTeacher('')
      setBatch('')
    } else {
      alert('teacher not found')
    }
  }
  return (
    <Card>
      <CardContent>
        <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
          Assign Teacher to Batch
        </Typography>
        <Input
          type='text'
          placeholder='Teacher Name'
          sx={{
            marginTop: '30px',
            display: 'block',
            width: '50%',
          }}
          value={teacher}
          onChange={(event) => setTeacher(event.target.value)}
        />
        <Input
          type='text'
          placeholder='Batch Name'
          sx={{
            marginTop: '30px',
            display: 'block',
            width: '50%',
          }}
          value={batch}
          onChange={(event) => setBatch(event.target.value)}
        />
        <Button
          variant='outlined'
          sx={{ marginTop: '10px' }}
          onClick={handlesubmit}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  )
}

export default Assign
