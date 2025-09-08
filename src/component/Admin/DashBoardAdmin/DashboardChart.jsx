import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardChart() {
  const dashboard = useSelector((state) => state.admin.dashboardAdmin);

  if (!dashboard) return <p>Loading...</p>;

  const labels = ["Customer", "Pending", "Access", "Ending", "Cancel", "Pending Cancel", "Room", "Tour"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dashboard Data",
        data: [
          dashboard.customer,
          dashboard.order_pending,
          dashboard.order_access,
          dashboard.order_ending,
          dashboard.order_cancel,
          dashboard.order_pending_cancel,
          dashboard.room,
          dashboard.tour,
        ],
        backgroundColor: [
          "rgba(77, 255, 7, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderColor: [
          "rgba(6, 228, 24, 1)",  
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

    const options = {
    responsive: true,
    maintainAspectRatio: false, // 👈 để biểu đồ co giãn full container
    plugins: {
        legend: { position: "top" },
        title: { display: true, text: "Dashboard Overview" },
    },
    };

  return <Bar data={data} options={options} />;
}
