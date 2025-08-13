import { Box} from '@mui/material';
import ChangePasswordUI from './ChangePasswordUI';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetailUser } from '../../../Redux/ReduxAuth/Slice/editUserSlice';

const ChangePassword = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.auth.user.id)

  useEffect(() => {
    dispatch(getDetailUser(id))
  }, [dispatch, id])
  return (
    <Box>
      <ChangePasswordUI />
    </Box>
  );
};

export default ChangePassword
