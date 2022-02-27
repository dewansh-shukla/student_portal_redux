import { TableContainer, Paper } from '@mui/material'
import { Table } from '@mui/material'
import { TableRow } from '@mui/material'
import { TableBody } from '@mui/material'
import { TableCell } from '@mui/material'
import { TableHead } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
function Display(props) {
  const { students } = useSelector((state) => state)
  return (
    <>
      <Card
        sx={{
          overflow: 'scroll',
          maxHeight: '400px',
          minHeight: '400px',
        }}
      >
        <TableContainer component={Paper}>
          <Table arial-label='simple-table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <p style={{ fontSize: '15px' }}>Student Name List</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.name}>
                  <TableCell>{student.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  )
}

export default Display
