import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Chart({ chartData }) {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Vendas",
        data: chartData.values,
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return <Bar data={data} />;
}

export default Chart;
