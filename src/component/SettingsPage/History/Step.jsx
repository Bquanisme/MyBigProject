import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
  'Đơn hàng đã đặt',
  'Chờ thanh toán',
  'Thanh toán thành công',
  'Đánh giá',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box sx=
      {{ 
        width: '100%',
      }}
    >
      <Stepper activeStep={1} >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper><br />
    </Box>
  );
}
