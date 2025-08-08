import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardSales from './CardSales'

const Sales = ({id}) => {
    const detail = useSelector(state => state.roomTour.orderDetail)
    // console.log(detail)
    return (
    <Box
        sx={{
            gap: 5,
            pt: 3,
        }}
    >
        <Box
            sx={{
            width: '100%',
            maxWidth: 350,
            height: 400,
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: 4,
            overflow: 'hidden',
            display: 'flex',
            gap: 3,
            mt: 1,
            pl: 3,
            marginBottom: 2,
            }}
        >
    
            <Box sx={{ p: 2 , display: 'flex', flexDirection: 'column', gap: 5}}>
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
                    <Button variant='contained' sx={{textTransform: 'none', backgroundColor: 'red'}}>Hủy đơn hàng</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Sales
