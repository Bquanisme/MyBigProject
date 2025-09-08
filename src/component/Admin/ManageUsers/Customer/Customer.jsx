import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TableCustomer from './TableCustomer'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminCustomer } from '../../../../Redux/ReduxAuth/Slice/adminSlice'
import PaginationControl from '../../../RoomPage/PaginationControl'

const Customer = () => {
  const [name, setName] = useState('')
  const [inputName, setInputName] = useState('') 
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const customer = useSelector(state => state.admin.customerAdmin)

  const filteredData = customer.filter(order => {
    const searchName = name
      ? order?.display_name?.includes(name)
      : true;
    return searchName;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedCustomer = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  // console.log(paginatedCustomer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminCustomer())
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
          <Typography variant='h6' sx={{color: '#353333ff'}}>Name Category</Typography>
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
              
            >Search</Button>
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
            <Typography 
              sx={{
                pt: 2,
                pl: 2,
              }}
            >
              Quản lý Customer
            </Typography>
            <TableCustomer paginatedCustomer={paginatedCustomer}/>
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

export default Customer
