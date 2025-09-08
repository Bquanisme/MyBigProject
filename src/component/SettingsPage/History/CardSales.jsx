import * as React from 'react';
import {
    Alert,
  Box,
  Button,
  Dialog,
  Slide,
  Stack,
} from '@mui/material';
import { CardSalesUI } from './CardSalesUI';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrder } from '../../../Redux/ReduxAuth/Slice/roomTourSlice';


export default function CardSales({id}) {
    function TransitionRight(props) {
        return <Slide {...props} direction="left" />;
    }

    const [open, setOpen] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const dispatch = useDispatch();

    // console.log('id ==>', id)

    const check = useSelector(state => state.roomTour.listOrders)

    const statusCheck = () => {
        const foundOrder = check.find(order => order.id == id);

        if (!foundOrder) {
            handleShowAlert();
            return;
        }

        if (foundOrder.status === 'pending') {
            handleClickOpen(); 
        } 
        else {
            handleShowAlert(); 
        }
    }
    

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(getListOrder())
  }, [dispatch])

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

   return (
    <>
      <Button
        variant="contained"
        sx={{ textTransform: 'none' }}
        onClick={statusCheck}
      >
        Thanh toán
      </Button>

      {showAlert && (
        <Slide in={showAlert} direction="left" mountOnEnter unmountOnExit>
            <Box
            sx={{
                position: 'fixed',
                top: 16,
                right: 16,
                zIndex: 9999,
                minWidth: 300,
            }}
            >
            <Alert
                variant="filled"
                severity="error"
                onClose={() => setShowAlert(false)}
                sx={{ boxShadow: 3 }}
            >
                Đây không phải đơn hàng đang chờ xử lý! Không thể thanh toán
            </Alert>
            </Box>
        </Slide>
        )}

    {open && 
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            width: 450
          }
        }}
      >
        <CardSalesUI close={handleClose} />
      </Dialog>
    }
    </>
  );
}
