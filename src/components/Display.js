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
          maxWidth: '600px',
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
                  <h3 style={{ fontSize: '20px' }}>Student Name List</h3>
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

{
  /* {students.map((student) => {
          return <p>{student.name}</p>
        })} */
}
