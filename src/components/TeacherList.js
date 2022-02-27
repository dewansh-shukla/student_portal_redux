import {
  Card,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
function TeacherList() {
  const { teachers } = useSelector((state) => state)
  return (
    <>
      <Card
        sx={{
          maxWidth: '600px',
          overflow: 'scroll',
          maxHeight: '400px',
          minHeight: '400px',
        }}
      >
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>
                <p>Teachers Name</p>
              </TableCell>
              <TableCell align='right'>
                <p>Teachers Name</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Card>
    </>
  )
}

export default TeacherList
