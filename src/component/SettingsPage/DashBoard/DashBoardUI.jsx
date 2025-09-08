import React, { useState } from 'react';
import { 
  Box, Button, Chip, Divider, Typography, Snackbar, Alert 
} from '@mui/material';
import '../../../AllCss/Home.css';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { BookingDelete, getListOrder } from '../../../Redux/ReduxAuth/Slice/roomTourSlice';
import SearchIcon from '@mui/icons-material/Search';
import BasicMenu from './MenuForDashBoard';
import MenuForStatus from './MenuForStatus';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../../../assets/loading.gif'
import PaginationControl from '../../RoomPage/PaginationControl';

const DashBoardUI = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.roomTour);
  const listOrders = useSelector(state => state.roomTour.listOrders);

  const navigate = useNavigate();

  const [nameInput, setNameInput] = useState('');
  const [name, setName] = useState('');
  const [sortType, setSortType] = useState('');
  const [sortTypeMenu, setSortTypeMenu] = useState('');

  //Page
  const [page, setPage] = useState(1);
  const rowsPerPage = 3;

  // Snackbar state
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const handleShowFullOrder = (id) => {
    navigate(`/User/Settings/History/${id}`);
  }

  if (status === 'loading') {
    return (
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '50%', 
        flexDirection: 'column', 
        gap: 10 , 
        m: 'auto', 
        pt: '100px' 
      }}>
        <img src={loadingGif} style={{ width: '100%' }} alt="loading"/>
      </Box>
    );
  }

  const filteredData = listOrders.filter(order => {
    const matchStatus = sortTypeMenu
      ? order.status?.toLowerCase().includes(sortTypeMenu.toLowerCase())
      : true;

    const matchName = name
      ? order.name?.toLowerCase().includes(name.toLowerCase())
      : true;

    const matchType = sortType
      ? order.type_room?.toLowerCase().includes(sortType.toLowerCase())
      : true;

    return matchName && matchType && matchStatus;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  
  const showDataOrder = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleDelete = (id, status) => {
    if (status === "pending") {
      if (window.confirm("Bạn có chắc muốn huỷ đơn hàng này không?")) {
        dispatch(BookingDelete({ id }));
        dispatch(getListOrder());
        setSnackbarMsg("Huỷ đơn hàng thành công!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      }
    } else {
      setSnackbarMsg("Chỉ có thể huỷ đơn hàng ở trạng thái Pending!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
  <Box>
    <Typography variant='h5' sx={{ mt: 8, ml: 3 }}>
      Lịch sử đơn hàng
    </Typography>

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
        mt: 3,
        px: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2
      }}
    >
      {/* Search Input */}
      <Box sx={{ position: 'relative', width: '500px' }}>
        <input 
          type="text" 
          name='name'
          value={nameInput} 
          placeholder='Tìm kiếm theo tên đơn hàng'
          onChange={(e) => setNameInput(e.target.value)}  
          style={{
            width: '100%',
            height: '40px',
            paddingLeft: '10px',
            paddingRight: '40px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        />
        <Button
          onClick={() => setName(nameInput)}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '5px',
            transform: 'translateY(-50%)',
            minWidth: 'auto',
            padding: 0,
            width: '30px',
            height: '30px',
            backgroundColor: '#fff',
          }}
        >
          <SearchIcon />
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 500 }}>Lọc theo</Typography>
        <BasicMenu onSortChange={setSortType}/>
        <Typography sx={{ fontWeight: 500 }}>Lọc theo trạng thái</Typography>
        <MenuForStatus onSortChangeMenu={setSortTypeMenu}/>
      </Box>
    </Box>

    {/* Orders List */}
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 2,
        paddingTop: 8,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {showDataOrder.length === 0 ? (
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'gray',
            fontStyle: 'italic',
            padding: '20px',
          }}
        >
          Không có đơn hàng
        </Typography>
      ) : (
        showDataOrder.map((item) => {
          return (
            <Box
              key={item.id}
              borderRadius={3}
              boxShadow={1}
              bgcolor="#fff"
              sx={{ width: '100%', maxWidth: '100%' }}
              mb={2}
            >
              {/* Action buttons */}
              <Box
                sx={{
                  display: 'flex',
                  margin: 2,
                  mt: 3,
                  gap: 4,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <Typography variant="body1" fontWeight="bold">
                    Mã đơn hàng: ĐH200{`${item.id}`}
                  </Typography>
                  <Chip label={item.status || 'Chờ thanh toán'} color="warning" />
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mr: 0 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    sx={{ textTransform: 'none' }}
                    onClick={() => handleDelete(item.id, item.status)}
                  >
                    Hủy đơn hàng
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleShowFullOrder(item.id)}
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    Chi tiết đơn
                  </Button>
                </Box>
              </Box>
              <Divider sx={{ margin: 2, borderColor: 'lightgray' }} />
              <Box display="flex" gap={5} p={2} boxShadow={1} bgcolor="#fff">
                {/* Image */}
                <Box sx={{ width: 240, height: 180, overflow: 'hidden' }}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                </Box>

                {/* Content */}
                <Box flex={1} display="flex" flexDirection="column" justifyContent="left">
                  <Typography variant="h6" fontWeight="bold" mb={0.5} textAlign="left" fontSize="16px">
                    {item.name}
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    Ngày khởi hành: {moment(item?.start_date).format('DD-MM-YYYY')}
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    Ngày kết thúc: {moment(item?.end_date).format('DD-MM-YYYY')}
                  </Typography>
                  <br />
                  <Typography variant="body2" color="red">
                    Thành tiền: {item.cost} đ
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
    <PaginationControl
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
  </Box>
  );
};

export default DashBoardUI;
