import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AccountUI from './AccountUI';
import { getDetailUser } from '../../../Redux/ReduxAuth/Slice/editUserSlice';

const Account = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.auth.user.id)
  console.log(id)

  useEffect(() => {
    dispatch(getDetailUser(id))
  }, [dispatch, id])

  return (
    <Box>
      <AccountUI />
    </Box>
  );
};

export default Account
