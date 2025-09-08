import { Box, Button, Dialog, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminStaff } from '../../../../Redux/ReduxAuth/Slice/adminSlice'
import PaginationControl from '../../../RoomPage/PaginationControl'
import TableStaff from './TableStaff'
import NewStaff from './NewStaff'

const Staff = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false)
  const rowsPerPage = 3;

  const staff = useSelector(state => state.admin.staffAdmin)

  const totalPages = Math.ceil(staff.length / rowsPerPage);
  const paginatedStaff = staff.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleOpen = () => {
    setOpen(true);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminStaff())
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
            m: -1.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pb: 0}}>
              <Typography 

              >
                Quản lý Staff
              </Typography>
              <Box sx={{display: 'flex', gap: 1}}>
                <Button variant='outlined' disabled sx={{textTransform: 'none'}}>Admin</Button>
                <Button variant='contained' sx={{textTransform: 'none'}} onClick={handleOpen}>New Staff</Button>
              </Box>
            </Box>
            <TableStaff paginatedStaff={paginatedStaff}/>
        </Box>     
      </Box><br />
      <PaginationControl
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <NewStaff 
        open={open} 
        onClose={() => setOpen(false)} 
      />
    </Box>
  )
}

export default Staff
