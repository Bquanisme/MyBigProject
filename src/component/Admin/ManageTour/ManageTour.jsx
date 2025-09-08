import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaginationControl from '../../RoomPage/PaginationControl'
import { getAdminRoomTour } from '../../../Redux/ReduxAuth/Slice/adminSlice'
import TableRoomTour from './TableRoomTour'
import DeleteRoomTour from './DeleteRoomTour'
import NewRoomTour from './NewRoomTour'

const ManageTour = () => {
  const [name, setName] = useState('')
  const [inputName, setInputName] = useState('') 
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const [selectedIds, setSelectedIds] = useState([]);

  const roomTour = useSelector(state => state.admin.roomTourAdmin)

  const filteredData = roomTour.filter(order => {
    const searchName = name
      ? order?.name?.includes(name)
      : true;
    return searchName;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedCategory = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  // console.log(selectedIds)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminRoomTour())
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
            <NewRoomTour />
          </Box>
        </Box>
        </form>   
        <Box sx={{m: 0, mt: -10, mb: -5}}>
          {selectedIds.length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, pb: 0, pt: 10 }}>
              <Button 
                variant="outlined"  
                sx={{ textTransform: "none", borderColor: "#1b1b1bff", color: '#1b1b1bff' }}
              >
                Selected {selectedIds.length} items
              </Button>
              <DeleteRoomTour selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
            </Box>
          )}
        </Box>

        <Box 
          sx={{
            bgcolor: '#ffffffff',
            m: -1.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Typography sx={{ pt: 2, pl: 2 }}>
              Quản lý RoomTour
            </Typography>

            <TableRoomTour 
              filteredData={filteredData}
              paginatedCategory={paginatedCategory}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
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

export default ManageTour
