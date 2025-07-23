import { Box, Typography } from '@mui/material'
import React from 'react'
import ContactJpg from '../../assets/HaLong.jpg'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaInternetExplorer } from 'react-icons/fa';

const ScrollDialogUI = () => {
  return (
    <Box display='flex' margin='20px'>
        <Box>
            <Typography 
                fontWeight="bold" 
                color="black" 
                mb={0.5} 
                textAlign='left' 
                fontSize='16px' 
                margin='10px'
                marginLeft='20px'
            >
            Để đặt vé liên hệ ngay qua hotline hoặc truy
            cập vào website để biết thêm thông tin
            </Typography>
            <Box
                marginTop='90px'
                marginLeft='20px'
            >
                <Box display='flex' alignItems='center'>
                    <PhoneInTalkIcon fontSize='30px' style={{color: 'red'}}  />
                    <Typography fontWeight="bold" m style={{color: 'red'}}>Hotline:</Typography>
                    <Typography marginLeft='40px'>0392 334 912 - 0333 999 555</Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <FaInternetExplorer fontSize='15px' style={{color: 'red'}}  />
                    <Typography fontWeight="bold" m style={{color: 'red'}}>Website:</Typography>
                    <Typography marginLeft='33px'>BookingTourUltimate.com.vn</Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <FacebookIcon fontSize='30px' style={{color: 'red'}}  />
                    <Typography fontWeight="bold" m style={{color: 'red'}}>Facebook:</Typography>
                    <Typography marginLeft='20px'>facebook.com/BookingUltimate</Typography>
                </Box>
            </Box>
        </Box>
        <img src={ContactJpg} alt="" 
            width='300px'
            padding='10px'
            margin='10px'
            marginLeft='30px'
        />
    </Box>
  )
}

export default ScrollDialogUI
