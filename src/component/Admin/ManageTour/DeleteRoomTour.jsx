import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRoomTour, getAdminRoomTour } from '../../../Redux/ReduxAuth/Slice/adminSlice'

const DeleteRoomTour = ({ selectedIds, setSelectedIds }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const scroll = 'paper'
  console.log(selectedIds)

  const dispatch = useDispatch();

  const handleClick = () => {
    setOpenDialog(true)
  };

  const handleClose = () => {
    setOpenDialog(false)
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) return;

    try {
      dispatch(deleteRoomTour(selectedIds))
      dispatch(getAdminRoomTour())
      setSelectedIds([]) 
      setOpenDialog(false)
    } catch (err) {
      console.error("Delete failed:", err)
    }
  }

  return (
    <Box>
      <Button 
        variant="outlined" 
        color="error" 
        onClick={handleClick}
        sx={{ textTransform: "none" }}
      >
        Delete RoomTour
      </Button>

      <Dialog 
        open={openDialog}
        onClose={handleClose}
        scroll={scroll}
        maxWidth="sm"
        PaperProps={{
          sx: {
            position: 'absolute',
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 400
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title" sx={{fontWeight: 600, fontSize: 18}}>
          Xóa Tour 
        </DialogTitle> 
        <DialogContent > 
          <Typography sx={{fontWeight: 700, fontSize: 22}}> 
            Xác nhận xóa Tour này ?
          </Typography> 
        </DialogContent>

        <DialogActions>
          <Button 
            variant='outlined' 
            sx={{textTransform: 'none', color: "grey", borderColor: 'lightgray', fontSize: 15}}
            onClick={handleClose}
            size='small'
          >
            Hủy
          </Button>
          <Button 
            variant='contained' 
            size='small'
            sx={{textTransform: 'none', fontSize: 15}}
            onClick={handleDelete}
          >
            Xóa
          </Button>   
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default DeleteRoomTour
