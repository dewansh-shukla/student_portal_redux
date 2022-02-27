import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addteacher } from '../reducers/Teachereducer'
function Teacher() {
  const [subject, setSubject] = React.useState('')
  const [teacher, setTeacher] = useState('')
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setSubject(event.target.value)
  }
  const handlesubmit = (event) => {
    event.preventDefault()
    if (teacher.trim().length === 0) {
      alert('Enter valid teacher name')
      setTeacher('')
      return
    }
    const newteacher = { name: teacher, sub: subject }
    dispatch(addteacher(newteacher))
    setTeacher('')
    setSubject('')
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
          Create Teacher
        </Typography>
        <Input
          type='text'
          placeholder='Teacher Name'
          sx={{
            marginTop: '30px',
            display: 'block',
            width: '50%',
          }}
          onChange={(event) => {
            setTeacher(event.target.value)
          }}
          value={teacher}
        />
        <FormControl
          variant='standard'
          sx={{ marginTop: '20px', width: '50%' }}
        >
          <InputLabel>Subject</InputLabel>
          <Select
            labelId='subject'
            id='subject'
            value={subject}
            label='Age'
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Maths'}>Maths</MenuItem>
            <MenuItem value={'English'}>English</MenuItem>
            <MenuItem value={'Science'}>Science</MenuItem>
          </Select>
          <FormHelperText>Choose the subject</FormHelperText>
        </FormControl>
        <Button
          variant='outlined'
          sx={{ marginTop: '10px', display: 'block' }}
          onClick={handlesubmit}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  )
}

export default Teacher
