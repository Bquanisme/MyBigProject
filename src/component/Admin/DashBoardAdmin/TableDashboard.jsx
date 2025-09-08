import React from "react";
import { Box, Paper } from "@mui/material";
import DashboardChart from "./DashboardChart";

export default function TableDashboard() {
  return (
    <Box component={Paper} p={3} sx={{minHeight: 610, maxHeight: '100%'}}>
      <DashboardChart />
    </Box>
  );
}
