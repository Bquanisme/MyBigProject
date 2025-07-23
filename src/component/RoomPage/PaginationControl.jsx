import React from 'react';
import {
  Box,
  Pagination,
  Stack,
} from '@mui/material';

const PaginationControl = ({page, onPageChange, totalPages}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end" padding='30px' paddingTop='10px' mt={2}>
    <Stack spacing={2}>
      <Pagination 
        count={totalPages}
        page={page}
        onChange={(event, value) => onPageChange(value)}
        color="primary"
        />
    </Stack>
    </Box>
  );
};

export default PaginationControl;
