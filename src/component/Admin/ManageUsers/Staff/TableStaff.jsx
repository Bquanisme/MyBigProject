import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import ActionStaff from './ActionStaff';
// import Action from './Action';

export default function TableStaff({paginatedStaff}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor: '#f5f5f5'}}>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>ID</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Role ID</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Status</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Name</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Phone</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Email</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Detail Address</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {paginatedStaff && paginatedStaff.map((row) => (
                <TableRow
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row?.id}
                </TableCell>
                <TableCell align="left">{row?.role_id || 'null'}</TableCell>
                <TableCell align="left">{row?.status || 'null'}</TableCell>
                <TableCell align="left">{row?.display_name || 'null'}</TableCell>
                <TableCell align="left">{row?.phone_number || 'null'}</TableCell>
                <TableCell align="left">{row?.email || 'null'}</TableCell>
                <TableCell align="left">{row?.detail_address || 'null'}</TableCell>
                <TableCell align="left">
                    <ActionStaff id={row?.id} status={row?.status}/>
                </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
