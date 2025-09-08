import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { verifyCode } from '../../Redux/ReduxAuth/Slice/authSlice'
import { useNavigate } from 'react-router-dom'

const VerifyEmail = ({ openDialog, handleCloseDialog, email }) => {


    const [code, setCode] = useState('')
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { verifyStatus, verifyError, VerifyEmail } = useSelector(state => state.auth)

    const handleVerify = (e) => {
        e.preventDefault();
        dispatch(verifyCode({ email, code: code }))
    }

    useEffect(() => {
        if (verifyStatus == 'succeeded'){
            setTimeout(() => {
                navigate('/Login')
                VerifyEmail()
                verifyStatus('')
            }, 2000);
        }
    }, [verifyStatus, navigate, VerifyEmail])

    console.log(verifyStatus)

  return (
    <Box>
        <Dialog 
            PaperProps={{
                sx: {
                position: 'absolute',
                top: 80,
                m: 0,
                borderRadius: 2,
                width: 750
                },
            }}
            open={openDialog} 
            onClose={ handleCloseDialog }
        >
            <DialogTitle>Đăng ký thành công</DialogTitle>
            <DialogContent>
                <form onSubmit={handleVerify}>
                    <input 
                        type="number" 
                        name='code'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        style={{
                            display: 'block', 
                            margin: '0 auto',
                            width: '80%', 
                            height: '40px',
                            borderRadius: '8px',
                            border: '1px solid lightgray',
                            paddingLeft: '12px',
                            fontSize: '15px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#1976d2'; 
                            e.target.style.boxShadow = '0 0 6px rgba(25, 118, 210, 0.4)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = 'lightgray';
                            e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                        }}
                    /><br/>
                    <Button
                        variant='contained'
                        sx={{display: 'flex', m: 'auto', textTransform: 'none'}}   
                        onClick={handleVerify} 
                    >
                        Xác nhận thông tin
                    </Button><br />
                    {verifyStatus === 'loading' && <Typography color="blue">Đang xác thực...</Typography>}
                    {verifyStatus === 'succeeded' && <Typography color="green">Xác thực thành công</Typography>}
                    {verifyStatus === 'failed' && <Typography color="red">{verifyError}</Typography>}
                </form><br />
            <Typography>Vui lòng kiểm tra email và xác thực tài khoản để hoàn tất.</Typography>
            </DialogContent><br />
            <DialogActions>
            <Button onClick={handleCloseDialog}>Đóng</Button>
            </DialogActions>
        </Dialog>
    </Box>
  )
}

export default VerifyEmail
