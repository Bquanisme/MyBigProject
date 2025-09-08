import { Box, Button, Typography } from '@mui/material'
import QRCode from '../../../assets/QRPayment.jpg'
import CloseIcon from '@mui/icons-material/Close';

export const CardSalesUI = ({close}) => {
    return (
    <Box margin='20px'>
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <CloseIcon onClick={close} style={{color: 'grey', cursor: 'pointer'}}/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
                <Typography 
                fontWeight="bold" 
                color="blue" 
                textAlign='center' 
                fontSize='26px' 
                >
                THANH TOÁN
                </Typography>
                <Box 
                textAlign='center' 
                fontSize='26px' 
                sx={{backgroundSize: 'cover'}}
                >
                    <img src={QRCode} width={'250px'} display={'flex'} style={{justifyContent: 'center'}} alt="QRCode" />
                </Box>
            </Box>
            <Box
                marginTop='50px'
                marginLeft='20px'
            >
                <Box display='flex' flexDirection={'column'}>
                    <Typography fontWeight="bold" m={1} >Tên TK:</Typography>
                    <Typography m={1}>Cổng thông tin du lịch</Typography>
                </Box>
                <Box display='flex' flexDirection={'column'}>
                    <Typography fontWeight="bold" m={1} >Số TK:</Typography>
                    <Typography m={1}>0123456789</Typography>
                </Box>
                <Box display='flex' flexDirection={'column'}>
                    <Typography fontWeight="bold" m={1} >Ngân hàng:</Typography>
                    <Typography m={1}>Vietcombank - chi nhánh Ba Đình, Hà Nội</Typography>
                </Box><br />
            </Box>
        </Box>
        
    </Box>
  )
}

