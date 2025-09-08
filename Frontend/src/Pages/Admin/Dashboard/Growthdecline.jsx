import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DailySalesGrowthApi } from "../../../API/Admin/dashboardApi";
import { Toastifyerror } from "../../../Component/Notification/Toastitynotificaition";
import { ToastContainer } from "react-toastify";
import Loader from "../../../Component/Common/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const DailySalesGrowth = () => {
  const [dailySales, setDailySales] = useState([]);
  const [loading, setLoading] = useState(true);
  const featcheddata = async () => {
    try {
      const res = await DailySalesGrowthApi();
      setDailySales(res.data);
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: dailySales.map((d) => d.day),
    datasets: [
      {
        label: "Sales",
        data: dailySales.map((d) => Number(d.total_sales)),
        fill: true,
        backgroundColor: "rgba(57, 73, 171,0.2)",
        borderColor: "#3949AB",
        tension: 0.3,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 0 }, // remove extra spacing
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: "#f3f4f6" } },
      x: { grid: { display: false } },
    },
  };

  const totalToday = dailySales[dailySales.length - 1]?.total_sales ?? 0;
  const yesterday = dailySales[dailySales.length - 2]?.total_sales ?? 0;
  const growthPercent = yesterday
    ? ((totalToday - yesterday) / yesterday) * 100
    : 0;
  const isGrowth = growthPercent >= 0;

  useEffect(() => {
    featcheddata();
  }, []);

  return (
    <div className="max-w-sm  hover:shadow-lg hover:-translate-y-1 bg-white rounded-lg shadow-sm p-4 md:p-6">
      <ToastContainer />
      <div className="flex justify-between items-start mb-4">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">
            ₹{Number(totalToday).toLocaleString()}
          </h5>
          <p className="text-base font-normal text-gray-500">Sales today</p>
        </div>
        <div
          className={`flex items-center px-2.5 py-0.5 text-base font-semibold text-center ${
            isGrowth ? "text-green-500" : "text-red-500"
          }`}
        >
          {Math.abs(Math.round(growthPercent))}%
          <svg
            className="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isGrowth ? "M5 13V1m0 0L1 5m4-4 4 4" : "M5 1v12m0 0L1 9m4 4 4-4"
              }
            />
          </svg>
        </div>
      </div>

      <div className="w-full h-64 ">
        {loading ? (
          <Loader />
        ) : !chartData || chartData.datasets?.length === 0 ? (
          <p className="text-gray-500 text-sm">No data available</p>
        ) : (
          <Line
            data={chartData}
            options={{
              ...chartOptions,
              maintainAspectRatio: false,
              layout: { padding: 0 },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DailySalesGrowth;
