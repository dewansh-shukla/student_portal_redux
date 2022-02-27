import { Button, Card, CardContent, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { addbatch, addStudentsToBatch } from '../reducers/batchreducer'
function Batch() {
  const { students } = useSelector((state) => state)
  const [batch, setBatch] = useState('')
  const [number, setNumber] = useState(0)
  const dispatch = useDispatch()
  onsubmit = (event) => {
    event.preventDefault()
    if (batch.trim().length === 0) {
      alert('Enter valid Batch')
      return
    }
    console.log(batch)
    const newbatch = { b: batch, n: number }

    dispatch(addbatch(newbatch))
    dispatch(addStudentsToBatch(students.slice(0, number)))
    setBatch('')
    setNumber(0)
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
        <Typography variant='h6'>Create Batch</Typography>
        <Input
          type='text'
          placeholder='Batch Name'
          sx={{
            marginTop: '30px',
            display: 'block',
            width: '50%',
          }}
          value={batch}
          onChange={(event) => {
            setBatch(event.target.value)
          }}
        />
        <Input
          type='text'
          placeholder='No. of students'
          sx={{
            marginTop: '30px',
            display: 'block',
            width: '50%',
          }}
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <Button
          variant='outlined'
          sx={{ marginTop: '10px' }}
          onClick={onsubmit}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  )
}

export default Batch
