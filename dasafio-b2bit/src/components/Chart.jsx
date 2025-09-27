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
        backgroundColor: "rgba(37, 99, 235, 0.7)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1000 } },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Desempenho de Vendas</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Chart;
