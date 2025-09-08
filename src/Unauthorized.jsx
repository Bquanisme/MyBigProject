import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h3" color="error" gutterBottom>
        403 - Unauthorized
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Bạn không có quyền truy cập vào trang này.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Quay lại trang chủ
      </Button>
    </Box>
  );
};

export default Unauthorized;
