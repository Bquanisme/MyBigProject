import { Box, Button, DialogActions, Typography } from '@mui/material'
import React from 'react'

const DeleteCheck = ({close}) => {
    return (
    <Box margin='20px'>
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
            Đã xóa Customer thành công !!
            </Typography>
        </Box> 
        <DialogActions>
            <Button 
                variant='contained' 
                sx={{textTransform: 'none'}}
                onClick={close}
            >
                Thoát
            </Button>   
        </DialogActions>
    </Box>
  )
}

export default DeleteCheck
