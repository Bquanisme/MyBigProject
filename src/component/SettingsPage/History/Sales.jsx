import { Alert, Box, Button, Snackbar, Typography } from '@mui/material'
import React,  { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardSales from './CardSales'
import { BookingDelete, getListOrder } from '../../../Redux/ReduxAuth/Slice/roomTourSlice'
import { useNavigate } from 'react-router-dom'

const Sales = ({id}) => {
    const detail = useSelector(state => state.roomTour.orderDetail)
    console.log(id)

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
    if (detail?.status === "pending") {
      if (window.confirm("Bạn có chắc muốn huỷ đơn hàng này không?")) {
        dispatch(BookingDelete({ id }));
        setSnackbarMsg("Huỷ đơn hàng thành công!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setTimeout(() => {
            navigate('/User/Settings')
             dispatch(getListOrder());
        }, 3000);
      }
    } else {
      setSnackbarMsg("Chỉ có thể huỷ đơn hàng ở trạng thái Pending!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

    return (
    <Box
        sx={{
            gap: 5,
            pt: 3,
        }}
    >
        {/* Snackbar */}
        <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert 
            onClose={() => setOpenSnackbar(false)} 
            severity={snackbarSeverity} 
            variant='filled'
            sx={{ width: '100%' }}
            >
            {snackbarMsg}
            </Alert>
        </Snackbar>
        <Box
            sx={{
            width: '100%',
            maxWidth: 400,
            height: 440,
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: 4,
            overflow: 'hidden',
            display: 'flex',
            gap: 3,
            pr: 3,
            mt: 1,
            pl: 3,
            marginBottom: 2,
            }}
        >
    
            <Box sx={{ p: 3 , display: 'flex', flexDirection: 'column', gap: 5}}>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="black"
                    fontSize="17px"
                    mb={0.5}
                    mt={2}
                >
                    Thông tin người thanh toán
                </Typography>

                <Box sx={{display: 'flex', gap: 6}}>
                    <Typography fontWeight='bold'>Họ và tên:</Typography> 
                    <Typography>{detail?.user?.display_name}</Typography>
                </Box> 

                <Box sx={{display: 'flex', gap: 2.5}}>
                    <Typography fontWeight='bold'>Số điện thoại:</Typography> 
                    <Typography>{detail?.user?.phone_number}</Typography>
                </Box> 

                <Box sx={{display: 'flex', gap: 10}}>
                    <Typography fontWeight='bold'>Email:</Typography> 
                    <Typography>{detail?.user?.email}</Typography>
                </Box> 

                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <CardSales id={id}/>
                    {detail?.status && 
                        <Button 
                        variant='contained' 
                        onClick={handleDelete}
                        sx={{
                            textTransform: 'none', 
                            backgroundColor: 'red'
                        }}>
                            Hủy đơn hàng
                        </Button>
                    }
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Sales
