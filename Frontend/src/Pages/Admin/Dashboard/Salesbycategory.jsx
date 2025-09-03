import React, { useEffect, useState } from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { SalesbyCategoryApi } from "../../../API/Admin/dashboardApi";
import { Toastifyerror } from "../../../Component/Notification/Toastitynotificaition";

ChartJS.register(ArcElement, Tooltip, Legend);

const Salesbycategory = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchSalesByCategory = async () => {
      try {
        const res = await SalesbyCategoryApi();
        const data = res.data;

        setChartData({
          labels: data.map((d) => d.category),
          datasets: [
            {
              label: "Sales by Category",
              data: data.map((d) => d.total_sales),
              backgroundColor: [
                "rgba(57, 73, 171 ,0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        Toastifyerror(error);
      }
    };

    fetchSalesByCategory();
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-lg hover:-translate-y-1">
      <h2 className="text-lg font-semibold text-gray-900">Sales by Category</h2>
      <div className="py-6">
        {chartData ? (
          <Pie data={chartData} />
        ) : (
          <p className="text-gray-500 text-sm">Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default Salesbycategory;
