import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import EditCancel from './EditCancel';

export default function TableCancelRequest({paginatedCancel}) {
    const getStatusColor = (status) => {
        if (status === "pending") return "blue";
        if (status === "cancel") return "red";
        return "green";
    };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor: '#f5f5f5'}}>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>ID</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">ID order</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Name</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Type</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Cost</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Status</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {paginatedCancel && paginatedCancel.map((row) => (
                <TableRow
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row" sx={{color: 'blue'}}>
                    {row?.id}
                </TableCell>
                <TableCell align="left">{row?.order_id || 'null'}</TableCell>
                <TableCell align="left">{row?.name || 'null'}</TableCell>
                <TableCell align="left">{row?.type_room || 'null'}</TableCell>
                <TableCell align="left">{row?.cost || 'null'}</TableCell>
                <TableCell align="left">
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <Box
                            sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: getStatusColor(row.status),
                            }}
                        />
                        <Typography>{row.status}</Typography>
                    </Box>
                </TableCell>
                <TableCell align="left">
                    <EditCancel id={row?.id} status={row?.status}/>
                </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
