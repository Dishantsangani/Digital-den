import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Toastifyerror } from "../../../Component/Notification/Toastitynotificaition";
import { GetDashboarMostsales } from "../../../API/Admin/dashboardApi";
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

function Totalsalesmonth() {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMostSales = async () => {
    try {
      const res = await GetDashboarMostsales();
      const rawData = res?.data;

      const dataArray = Array.isArray(rawData) ? rawData : [rawData];

      const data = dataArray.map((d) => ({
        month: d.month,
        total_sales: Number(d.total_sales),
        total_orders: Number(d.total_orders),
      }));

      setSalesData(data);
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setLoading(false);
    }
  };

  // total sales
  const totalSales = salesData.reduce((acc, d) => acc + d.total_sales, 0);

  // growth rate (compare last 2 months)
  const growthRate =
    salesData.length > 1
      ? (
          ((salesData[salesData.length - 1].total_sales -
            salesData[salesData.length - 2].total_sales) /
            salesData[salesData.length - 2].total_sales) *
          100
        ).toFixed(1)
      : 0;

  const chartData = {
    labels: salesData.map((d) => d.month),
    datasets: [
      {
        label: "Total Sales ($)",
        data: salesData.map((d) => d.total_sales),
        backgroundColor: "rgb(57, 73, 171)", // Tailwind green-500
        borderRadius: 8,
      },
    ],
  };

  useEffect(() => {
    fetchMostSales();
  }, []);

  return (
    <div className="max-w-sm w-full  hover:shadow-lg hover:-translate-y-1  bg-white rounded-2xl shadow-md p-6">
      {/* Header */}
      <ToastContainer />
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 19"
            >
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
            </svg>
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900">
              ${totalSales.toLocaleString()}
            </h5>
            <p className="text-sm font-medium text-gray-500">
              Total Sales This Month
            </p>
          </div>
        </div>

        {/* Growth Rate */}
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-lg ${
            growthRate >= 0
              ? "bg-indigo-600 text-white"
              : "bg-red-100 text-red-700"
          }`}
        >
          {growthRate >= 0 ? "↑" : "↓"} {Math.abs(growthRate)}%
        </span>
      </div>

      {/* Chart */}
      <div className="mt-4 h-64">
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
              maintainAspectRatio: false, // important
              responsive: true,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: true },
              },
              scales: {
                x: { grid: { display: false } },
                y: {
                  ticks: { stepSize: 500 },
                  grid: { color: "#f3f4f6" },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Totalsalesmonth;
