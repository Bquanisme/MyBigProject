import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Action from './Action';

export default function TableCustomer({paginatedCustomer}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor: '#f5f5f5'}}>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>ID</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Tên hiển thị</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Email</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Số điện thoại</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Địa chỉ</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Status</TableCell>
            <TableCell sx={{fontSize: 15, fontWeight: 'bold'}} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {paginatedCustomer && paginatedCustomer.map((row) => (
                <TableRow
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row?.id}
                </TableCell>
                <TableCell align="left">{row?.display_name || 'null'}</TableCell>
                <TableCell align="left">{row?.email || 'null'}</TableCell>
                <TableCell align="left">{row?.phone_number || 'null'}</TableCell>
                <TableCell align="left">{row?.detail_address || 'null'}</TableCell>
                <TableCell align="left">
                    {row.status 
                    ? <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                        <Box
                            sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: 'green',
                            }}
                        />
                        <Typography>Public</Typography>
                    </Box>
                    : <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                        <Box
                            sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#f7a409ff',
                            }}
                        />
                        <Typography>UnPublic</Typography>
                    </Box>
                    }
                </TableCell>
                <TableCell align="left">
                    <Action id={row?.id} status={row?.status}/>
                </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
