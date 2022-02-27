import {
  Card,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
function BatchList() {
  const { batches } = useSelector((state) => state)
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
                  <p>Batch</p>
                </TableCell>
                <TableCell>
                  <p>Teacher</p>
                </TableCell>
                <TableCell>
                  <p>Subject</p>
                </TableCell>
                <TableCell>
                  <p>No. of Students</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell>{batch.id}</TableCell>
                  <TableCell>{batch.teacher}</TableCell>
                  <TableCell>{batch.subject}</TableCell>
                  <TableCell>{batch.number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  )
}

export default BatchList
