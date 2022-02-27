import { Button, Card, CardContent, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addstudent } from '../reducers/Studentreducer'
function Student(props) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  onsubmit = (event) => {
    event.preventDefault()
    if (name.trim().length === 0) {
      alert('Student Name')
      return
    }
    dispatch(addstudent(name))
    setName('')
  }
  return (
    <Card
      sx={{
        maxHeight: 300,
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <CardContent>
        <Typography variant='h7' sx={{ fontWeight: 'bolder' }}>
          Create Student
        </Typography>

        <Input
          type='text'
          placeholder='Student Name'
          sx={{
            marginTop: '30px',
            display: 'block',
            width: '50%',
          }}
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <Button
          variant='outlined'
          sx={{ marginTop: '50px' }}
          onClick={onsubmit}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  )
}

export default Student
