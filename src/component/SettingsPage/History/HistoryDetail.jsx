import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailOrder } from '../../../Redux/ReduxAuth/Slice/roomTourSlice';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Sales from './Sales';
import HorizontalLinearAlternativeLabelStepper from './Step';

const HistoryDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.roomTour.orderDetail);

    useEffect(() => {
        dispatch(getDetailOrder(id));
    }, [dispatch, id]);

    console.log(detail)

        const start = new Date(detail.start_date);
        const end = new Date(detail.end_date);
        const diffDays = start && end
            ? Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24))
            : 0;
    

  return (
    <Box sx={{bgcolor: '#f5f5f5', width: '100%', minHeight: '1190px', height: '100%'}}>
        <Box sx={{ p: 13 }}>
            <HorizontalLinearAlternativeLabelStepper />
            <Typography variant='h6' fontWeight='bold'>Mã đơn hàng: ĐH200{id}</Typography>
            <Box sx={{
                display: 'flex',
                gap: 2,
                width: '100%'
            }}
            >
                <Box
                sx={{
                    gap: 5,
                    pt: 3,
                    pb: 3,
                }}
            >
                <Box
                  sx={{
                    width: '100%',
                    height: 440,
                    bgcolor: '#fff',
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: 'hidden',
                    display: 'flex',
                    gap: 2,
                    mt: 1,
                    marginBottom: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: '330px',
                      height: 210,
                    }}
                  >
                    <img
                      src={detail.logo}
                      alt={name}
                      style={{
                        borderRadius: 10,
                        width: '100%',
                        height: 440,
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
            
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 5}}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="black"
                      fontSize="17px"
                      mb={0}
                      mt={2}
                    >
                      {detail.name}
                    </Typography>


                    <Box sx={{display: 'flex', color: 'blue', gap: 3}}>
                        <Typography >{diffDays} ngày</Typography>
                        <Typography >4 địa điểm</Typography>
                        <Typography >Tàu + Ô tô</Typography> 
                    </Box>

                    <Box sx={{display: 'flex', gap: 6}}>
                      <Typography fontWeight='bold'>Địa điểm khởi hành:</Typography> 
                      <Typography>Hà Nội</Typography>
                    </Box> 

                    <Box sx={{display: 'flex', gap: 9.5}}>
                      <Typography fontWeight='bold'>Ngày khởi hành:</Typography> 
                      <Typography>{(detail.start_date)}</Typography>
                    </Box> 

                    <Box sx={{display: 'flex', gap: 11.5}}>
                      <Typography fontWeight='bold'>Ngày kết thúc:</Typography> 
                      <Typography>{(detail.end_date)}</Typography>
                    </Box>
                  </Box>
                </Box><br />
                <Box
                    sx={{
                        width: '100%',
                        height: '60px',
                        bgcolor: '#fff',
                        borderRadius: 2,
                        boxShadow: 4,
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        gap: 3,
                        mt: 1,
                        pl: 2,
                        pr: 2,
                        mb: 2,
                    }}
                    >
                    <Typography fontWeight="bold">Thành tiền:</Typography>
                    <Typography fontWeight="bold" color="error" fontSize="20px">
                        {detail.cost} đ
                    </Typography>
                </Box>
                </Box>
                <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
                    <Sales id={id}/>
                </Box>
            </Box>
        </Box>
    </Box>
  );
};

export default HistoryDetail;
