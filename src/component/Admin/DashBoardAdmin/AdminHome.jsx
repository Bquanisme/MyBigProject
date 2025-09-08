import { Box, Button, Dialog, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaginationControl from '../../RoomPage/PaginationControl'
import { getAdminDashboard } from '../../../Redux/ReduxAuth/Slice/adminSlice'
import TableDashboard from './TableDashboard'

const AdminHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminDashboard())
  }, [dispatch])

  return (
    <Box 
      sx={{
        bgcolor: '#f5f5f5',
        width: '100%',
        minHeight: 1200,
        p: 9,
        pl: 6,
        pr: 6,
        pt: 15,
      }}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 10}}> 
        <Box 
          sx={{
            bgcolor: '#ffffffff',
            width: '100%',
            height: '100%',
            m: -1.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pb: 0}}>
              <Typography 

              >
                Quản lý Dashboard
              </Typography>
            </Box>
            <TableDashboard/>
        </Box>     
      </Box><br />
    </Box>
  )
}

export default AdminHome
