import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "First Chart",
        data: [343, 2059, 4594, 2700, 1600, 3498],
        fill: false,
        borderColor: "rgba(54, 162, 235, 0.6)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "rgba(54, 162, 235, 1)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            family: "Arial",
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Arial",
            size: 12,
          },
          color: "#333",
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          font: {
            family: "Arial",
            size: 12,
          },
          color: "#333",
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    elements: {
      point: {
        radius: 5,
        borderWidth: 2,
      },
    },
    animation: {
      duration: 1000,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container" style={{ position: "relative", width: "98%", height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
