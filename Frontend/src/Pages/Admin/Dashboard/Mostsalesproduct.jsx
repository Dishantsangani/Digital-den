import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MostSalesProductApi } from "../../../API/Admin/dashboardApi";
import { Toastifyerror } from "../../../Component/Notification/Toastitynotificaition";
import { ToastContainer } from "react-toastify";
import Loader from "../../../Component/Common/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Mostsalesproduct = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMostSales = async () => {
    try {
      const res = await MostSalesProductApi();
      const data = res.data;

      setChartData({
        labels: data.map((item) => item.productname),
        datasets: [
          {
            label: "Sales",
            data: data.map((item) => item.total_sold),
            backgroundColor: "rgba(57, 73, 171, 0.8)",
            borderRadius: 6,
            barThickness: 16,
          },
        ],
      });
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMostSales();
  }, []);

  return (
    <div className="max-w-sm w-full hover:shadow-lg hover:-translate-y-1 bg-white rounded-lg shadow-sm p-4 md:p-6">
      <ToastContainer />
      {/* Header like screenshot */}
      <h2 className="text-lg font-semibold text-gray-900">
        Top Selling Products
      </h2>
      <div className="flex justify-between border-b border-gray-200 pb-3">
        <div>
          <span className="bg-indigo-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
            Sales Overview
          </span>
        </div>
      </div>

      {/* Horizontal chart */}
      <div className="h-64 mt-4">
        {loading ? (
          <Loader />
        ) : !chartData ||
          !chartData.datasets ||
          chartData.datasets.length === 0 ? (
          <p className="text-gray-500 text-sm">No data available</p>
        ) : (
          <Bar
            data={chartData}
            options={{
              indexAxis: "y", // horizontal
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (context) => `Sales: ${context.raw}`,
                  },
                },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  ticks: { color: "#374151", font: { size: 12 } },
                  grid: { drawTicks: false },
                },
                y: {
                  ticks: { color: "#374151", font: { size: 12 } },
                  grid: { drawTicks: false },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Mostsalesproduct;
