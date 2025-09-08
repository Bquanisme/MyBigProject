import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaginationControl from '../../RoomPage/PaginationControl'
import { getAdminOrder } from '../../../Redux/ReduxAuth/Slice/adminSlice'
import TableOrder from './TableOrder'

const ManageOrders = () => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [inputName, setInputName] = useState('') 
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleChange = (event) => {
    setStatus(event.target.value)
  };

  const order = useSelector(state => state.admin.orderAdmin)

  const filteredData = order.filter(order => {
    const searchName = name
      ? order?.name?.includes(name)
      : true;

    const searchStatus = status
      ? order?.status === status
      : true;
    return searchName && searchStatus;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedOrder = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminOrder())
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
        <form>
        <Box sx={{gap: 2, display: 'flex', flexDirection: 'column'}}>
          <Typography variant='h6' sx={{color: '#353333ff'}}>Search Name</Typography>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
              <input 
                type="text"
                name='name'
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                style={{
                  width: 300,
                  height: 30,
                  borderRadius: 6,
                  border: 'solid 1px lightgrey',
                  paddingLeft: 8
                }}
              />
              <Button 
                variant='contained' 
                size='small'
                onClick={() => setName(inputName)}
                sx={{
                  textTransform: 'none',
                  fontSize: 14,
                  pl: 2,
                  pr: 2
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
        </form>   
        <Box 
          sx={{
            bgcolor: '#ffffffff',
            m: -1.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pb: 0}}>
              <Typography>
                Quản lý Booking Room - Tour
              </Typography>
              <Box sx={{display: 'flex', gap: 2}}>
                <Button variant='outlined' disabled sx={{textTransform: 'none', width: 130}}>Select a status</Button>
                <FormControl sx={{width: 130}}>
                  <InputLabel id="demo-simple-select-label">All</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="status"
                    onChange={handleChange}
                  >
                      <MenuItem value=''>All</MenuItem>
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="access">Access</MenuItem>
                      <MenuItem value="ending">Ending</MenuItem>
                      <MenuItem value="cancel">Cancel</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <TableOrder
              paginatedOrder={paginatedOrder}
              filteredData={filteredData}
            />
        </Box>     
      </Box><br />
      <PaginationControl
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Box>
  )
}

export default ManageOrders
