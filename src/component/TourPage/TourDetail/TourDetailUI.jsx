import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Button,
  Stack,
  Link,
  Chip,
  Divider,
  DialogContentText,
  Slide,
} from '@mui/material';
import background from '../../../assets/img9.jpg';     
import backgroundImage from '../../../assets/img8.jpg';
import backgroundImage1 from '../../../assets/img7.jpg';
import backgroundImage2 from '../../../assets/img6.jpg';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookingOrder } from '../../../Redux/ReduxAuth/Slice/roomTourSlice';


const TourDetailUI = ({ tour }) => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);
  const [openTour, setOpenTour] = React.useState(false);
  
  const idUser = useSelector(state => state.auth.user.id);
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.auth.user)
  console.log(user)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const GetTour = () => {
    dispatch(getBookingOrder({
      id_room: id,
      id_user: idUser,
    }))
    navigate('/User/Settings');
  }

  const handleLogin = () => {
    navigate('/Login')
  }
  
   const handleClickOpenTour = () => {
    setOpenTour(true);
  };

  const handleCloseforX = () => {
    setOpen(false);
    setOpenTour(false);
  };

  const handleCloseforDelete = () => {
  setOpenTour(false);
  setOpen(false);
  setValue(0); 
  setHover(-1); 
  setReviewContent(''); 
  setUploadedImages([]); 
  };

  const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Normal',
  4: 'Good',
  5: 'Excellent',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  })

  const [uploadedImages, setUploadedImages] = React.useState([]);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setUploadedImages(prev => [...prev, ...imageUrls]);
  };

  const [reviewContent, setReviewContent] = React.useState('');
  const [submittedReviews, setSubmittedReviews] = React.useState([]);

  const handleSubmitReview = () => {
    setSubmittedReviews(prev => [
      ...prev,
      { rating: value, content: reviewContent, images: uploadedImages }
    ]);

    setValue(0);
    setReviewContent('');
    setUploadedImages([]);
    handleCloseforX();
  };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

  return (
    <div style={{backgroundColor: 'rgb(238, 235, 235)'}}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 330,
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 10,
          mt: 2, // kéo lên gần ảnh nền
        }}
      >

        <Box display="flex" alignItems="center">
          <Avatar
            src={tour.logo}
            variant="rounded"
            sx={{
              width: 160,
              height: 160,
              borderRadius: 2,
              mr: 4,
              mt: -10,
            }}
          />

          <Box>
            <Typography variant="h5" fontWeight="bold">
              {tour.name}
            </Typography>
            <Rating value={5} readOnly size="small" sx={{ mt: 1 }} />
            <Typography sx={{ color: '#2196f3', fontSize: 14, mt: 1 }}>
              Hòn Tre, Vĩnh Nguyên, Tp. Nha Trang, Khánh Hòa, Vietnam
            </Typography>
          </Box>
        </Box>

        {/* get and descripe */}
        <Stack spacing={2}>
          <Button
            variant="contained"
            color="error"
            sx={{ width: 250, fontWeight: 'bold' }}
            onClick={handleClickOpenTour}
          >
            Đặt tour ngay
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ width: 250, fontWeight: 'bold' }}
            onClick={handleClickOpen}
          >
            Viết bình luận
          </Button>
        </Stack>
      </Box>

      {/* Dialog getTour */}
      {user  
        ? <Dialog
        PaperProps={{
            sx: {
            position: 'absolute',
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 750
            },
        }}
        open={openTour}
        keepMounted
        onClose={handleCloseforX}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2 , fontWeight: '550'}}>{"Xác Nhận Đặt Tour"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{ m: 0, p: 2 , fontWeight: '100', color: 'black'}}>
            Bạn có chắc chắn đặt tour này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseforX} variant="outlined" size='small' style={{color: 'black', border: 'solid 1px lightgray'}} >Hủy</Button>
          <Button onClick={GetTour} variant="contained" size='small'>Đặt Tour</Button>
        </DialogActions>
      </Dialog>
      : <Dialog
        PaperProps={{
            sx: {
            position: 'absolute',
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 750
            },
        }}
        open={openTour}
        keepMounted
        onClose={handleCloseforX}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2 , fontWeight: '550'}}>{"Bạn chưa đăng nhập"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{ m: 0, p: 2 , fontWeight: '100', color: 'black'}}>
            Hãy đăng nhập để có thể đặt Tour !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseforX} variant="outlined" size='small' style={{color: 'black', border: 'solid 1px lightgray'}} >Hủy</Button>
          <Button onClick={handleLogin} variant="contained" size='small'>Đăng nhập</Button>
        </DialogActions>
      </Dialog> 
      }


      {/* Dialog descripe*/}
      {user
        ? <Dialog
        PaperProps={{
            sx: {
            position: 'absolute',
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 750
            },
        }}
        onClose={handleCloseforX}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 , fontWeight: '550'}} id="customized-dialog-title">
          Đánh giá
          <Typography mb={1} marginTop='10px' >
            {tour.name}
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseforX}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography display='flex'>
            <Typography>
              Chất lượng:
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Typography><br /><br />
          <Typography gutterBottom>
            Nội dung
            <form >
              <textarea 
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                style={{width: '100%', height: '80px', marginTop: '10px'}} 
              />
            </form>
          </Typography><br /><br />
          <Typography gutterBottom>
            Hình ảnh
            <Typography style={{ marginTop: '10px'}}>
              <Box mt={2} display="flex" gap={1}>
              {uploadedImages.map((src, index) => (
                <img key={index} src={src} alt="" style={{ width: 110, height: 100, objectFit: 'cover' }} />
              ))}
              </Box>
            </Typography><br />
            <Button
              component="label"
              variant="contained"
              tabIndex={-1}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={handleUpload}
                multiple
              />
            </Button>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" size='small' style={{color: 'black', border: 'solid 1px lightgray'}} onClick={handleCloseforDelete}>
            Hủy 
          </Button>
          <Button variant="contained" size='small' onClick={handleSubmitReview}>
            Đánh giá
          </Button>
        </DialogActions>
      </Dialog>
      : <Dialog
        PaperProps={{
            sx: {
            position: 'absolute',
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 750
            },
        }}
        onClose={handleCloseforX}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 , fontWeight: '550'}}>{"Bạn chưa đăng nhập"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{ m: 0, p: 2 , fontWeight: '100', color: 'black'}}>
            Hãy đăng nhập để có thể bình luận !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseforX} variant="outlined" size='small' style={{color: 'black', border: 'solid 1px lightgray'}} >Hủy</Button>
          <Button onClick={handleLogin} variant="contained" size='small'>Đăng nhập</Button>
        </DialogActions>
      </Dialog>
      }

      {/* Left link id */}
      <Box px={10} mt={6} display="flex" justifyContent="space-between" >
        <Box>
          <Stack direction="column" spacing={3} mb={3} sx={{ '& a': { textDecoration: 'none', color: 'black' } }}>
            <Link href="#gioithieu" fontSize={14}>📍 Giới thiệu</Link>
            <Link href="#mota" fontSize={14}>📄 Mô tả</Link>
            <Link href="#hinhanh" fontSize={14}>🖼 Hình ảnh</Link>
            <Link href="#danhgia" fontSize={14}>💬 Đánh giá & bình luận</Link>
          </Stack>
        </Box>

        
        {/* UI */}
        <Box>
            <br /><br />
            <Box id="gioithieu" >
                <Typography fontWeight="bold" mb={1} >
                Giới thiệu
                </Typography>
                <Box
                sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: 2,
                    p: 2,
                    maxWidth: 600,
                }}
                >
                <Typography fontSize={14}>
                    {tour.description}
                </Typography>
                </Box>
            </Box><br />
            <Box id="mota">
                <Typography fontWeight="bold" mb={1} >
                Mô tả
                </Typography>
                <Box
                sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: 2,
                    p: 2,
                    maxWidth: 600,
                }}
                >
                <Typography fontSize={14}>
                    {tour.categories?.description}
                </Typography>
                </Box>
            </Box><br />
            <Box id="hinhanh">
                <Typography fontWeight="bold" mb={1} >
                Hình ảnh
                </Typography>
                <Box
                sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: 2,
                    p: 2,
                    maxWidth: 600,
                    display:'flex',
                    gap: '5px'

                }}
                >
                    <Box sx={{width: '150px', height:'100px'}}>
                    <img src={background} style={{borderRadius: '10px', width:'100%', height:'100%', objectFit:'cover'}} alt="" />
                
                    </Box>
                    <Box sx={{width: '150px', height:'100px'}}>
                    <img src={backgroundImage} style={{borderRadius: '10px', width:'100%', height:'100%', objectFit:'cover'}} alt="" />
                    
                    </Box>
                    <Box sx={{width: '150px', height:'100px'}}>
                    <img src={backgroundImage1} style={{borderRadius: '10px', width:'100%', height:'100%', objectFit:'cover'}} alt="" />

                    </Box>

                    <Box sx={{width: '150px', height:'100px'}}>
                    <img src={backgroundImage2} style={{borderRadius: '10px', width:'100%', height:'100%', objectFit:'cover'}} alt="" />

                    </Box>
                </Box>
            </Box><br />
            <Box id="danhgia">
            <Typography fontWeight="bold" mb={1}>Đánh giá & bình luận</Typography>
            <Box
              sx={{
                bgcolor: '#f9f9f9',
                borderRadius: 2,
                p: 2,
                maxWidth: 600,
              }}
            >
              {submittedReviews.length === 0 ? (
                <Typography fontSize={14}>Chưa có đánh giá nào.</Typography>
              ) : (
                submittedReviews.map((review, index) => (
                  <Box key={index} mb={2} sx={{display: 'flex', gap: 2}}>
                    <img src={user.user.avatar} alt="user" className="user" />
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography fontSize={14} fontWeight='bold'>{user.user.display_name}</Typography>
                      <Rating value={review.rating} readOnly size="small" />
                      <Typography fontSize={14} mt={1}>{review.content}</Typography>
                      <Box mt={1} display="flex" gap={1}>
                        {review.images.map((img, i) => (
                          <img key={i} src={img} alt="" style={{ width: 110, height: 80, objectFit: 'cover' }} />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                ))
              )}
            </Box><br />
          </Box>
        </Box>

        {/* Right box */}
        <Box>
          <Box
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 2,
              p: 2,
              width: 250,
            }}
          >
            <Typography fontWeight="bold">Ngày khởi hành</Typography>
            <Typography mb={2}>{tour.start_date}</Typography>

            <Typography fontWeight="bold">Ngày kết thúc</Typography>
            <Typography mb={2}>{tour.end_date}</Typography>

            <Typography fontWeight="bold">Ưu đãi</Typography><br />
            <Typography sx={{fontSize: '12px', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <li>Bảo hiểm</li>
                    <li>Bữa ăn</li>
                    <li>Hướng dẫn viên</li>
                </div>
                <div>
                    <li>Xe đưa đón</li>
                    <li>Khách sạn 4 sao</li>
                    <li>Vé tham quan</li>
                </div>
            </Typography><br />
            <Typography fontWeight="bold">Giá khách lẻ</Typography><br />
            <Typography sx={{color : 'red', fontSize: '18px', fontWeight: 'bold'}}>{tour?.cost} đ / Người</Typography><br />
            
            <Typography fontWeight="bold">Số người 10</Typography><br />
            <Typography fontWeight="bold" display='flex'>
                <li style={{color: 'blue'}}></li>
                <Typography fontWeight="bold">Số vé còn lại {tour.can_order}</Typography>
            </Typography><br />
            <Typography fontWeight="bold">
                {
                    (() => {
                    const start = new Date(tour.start_date);
                    const end = new Date(tour.end_date);
                    const diffTime = Math.abs(end - start);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return `Số ngày ${diffDays}`;
                    })()
                }
            </Typography>
            <Typography display='flex' gap={1} alignItems='center'>
                <p style={{fontSize: '14px'}}>Liên hệ ngay</p>
                <Chip label="Gọi 0389059185" variant="outlined" sx={{color: "white" , backgroundColor: '#ffa733'}}/>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TourDetailUI;
