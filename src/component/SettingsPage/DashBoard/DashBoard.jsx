import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import DashBoardUI from './DashBoardUI';
import { getListOrder } from '../../../Redux/ReduxAuth/Slice/roomTourSlice';
import { useDispatch, useSelector } from 'react-redux';

const DashBoard = () => {
  const listOrders  = useSelector(state => state.roomTour.listOrders)
  console.log('===>',listOrders)
  const dispatch = useDispatch()
  const fetchApi = async () => {
     dispatch(getListOrder())
  };

  useEffect(() => {
    fetchApi();
  }, []); 

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 2 }}>
      <DashBoardUI data={listOrders} />
    </Box>
  );
};

export default DashBoard;
