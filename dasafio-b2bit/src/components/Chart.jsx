import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Chart({ labels, data }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Vendas Mensais",
        data,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderRadius: 6
      }
    ]
  };

  return (
    <div className="chart">
      <Bar data={chartData} />
    </div>
  );
}
