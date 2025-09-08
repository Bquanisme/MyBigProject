import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminDetailRoomTour } from '../../../Redux/ReduxAuth/Slice/adminSlice';
import CloseIcon from '@mui/icons-material/Close';
import loading from '../../../assets/loading.gif'

const DetailRoomTour = ({data, handleClose}) => {
    const dispatch = useDispatch();
    const info = useSelector(state => state.admin.roomTourDetail)

    useEffect(() => {
        dispatch(getAdminDetailRoomTour(data.id))
    }, [dispatch, data])

    // if(!info) return <img src={loading} alt="" />

  return (
    <Box>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 0, m: 3}}>
            <Box onClick={handleClose} sx={{cursor: 'pointer'}}><CloseIcon /></Box>
            <DialogTitle sx={{fontWeight: 'bold'}}>
                Xem chi tiết
            </DialogTitle>
        </Box>
        <Divider /><br />
        <DialogContent>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow >
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>ID</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.id}</TableCell>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Category Number</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.categories?.id || "null"}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Type Room</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.type}</TableCell>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Status</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.status}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Start Date</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.start_date}</TableCell>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>End Date</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.end_date}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Name Room</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.name}</TableCell>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Cost</TableCell>
                <TableCell sx={{fontSize: 16}}>{info?.cost}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Description</TableCell>
                <TableCell colSpan={3} sx={{fontSize: 16}}>{info?.description}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{backgroundColor: '#f5f5f5', fontSize: 16}}>Logo</TableCell>
                <TableCell colSpan={3}>
                  {info?.logo ? (
                    <Box
                      component="img"
                      src={info.logo}
                      alt="logo"
                      sx={{
                        width: 400,
                        height: "auto",
                        mt: 1,
                      }}
                    />
                  ) : (
                    <Typography>Không có hình ảnh</Typography>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Box>
  )
}

export default DetailRoomTour
