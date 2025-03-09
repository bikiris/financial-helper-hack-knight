import { useState, useEffect, useMemo, useRef } from "react";
import ReactApexChart from "react-apexcharts";

const BalanceContainer = ({ balance, balanceHistory = [] }) => {
  // Use refs to prevent unnecessary re-renders
  const chartOptionsRef = useRef(null);
  const chartSeriesRef = useRef(null);
  const [chartReady, setChartReady] = useState(false);
  
  const [fakeBalance, setFakeBalance] = useState(balance);

  // Generate sample data using useMemo to prevent recreation on each render
  const sampleData = useMemo(() => {
    return balanceHistory.length > 0
      ? balanceHistory
      : [
          { date: "1 Mar", amount: balance - 120 },
          { date: "2 Mar", amount: balance - 85 },
          { date: "3 Mar", amount: balance - 55 },
          { date: "4 Mar", amount: balance - 25 },
          { date: "5 Mar", amount: balance },
        ];
  }, [balance, balanceHistory]);

  // Initialize chart configuration only once
  useEffect(() => {
    // Only configure the chart if it hasn't been configured or data changed
    if (!chartReady || !chartOptionsRef.current || !chartSeriesRef.current) {
      // Set chart options
      chartOptionsRef.current = {
        chart: {
          type: "line",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          animations: {
            enabled: false, // Disable animations for better performance
          },
          fontFamily: "inherit",
          redrawOnWindowResize: false,
          background: 'transparent',
          sparkline: {
            enabled: false
          },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        colors: ["#4f46e5"], // Indigo color matching the text color
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          padding: {
            top: 5,
            right: 10,
            bottom: 0,
            left: 10,
          },
        },
        markers: {
          size: 4,
          colors: ["#4f46e5"],
          strokeColors: "#ffffff",
          strokeWidth: 2,
          hover: {
            size: 6,
            sizeOffset: 3,
          },
          discrete: [],
        },
        xaxis: {
          categories: sampleData.map((item) => item.date),
          labels: {
            style: {
              colors: "#64748b", // Tailwind slate-500
              fontFamily: "inherit",
            },
            offsetY: 5,
            trim: true,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#64748b", // Tailwind slate-500
              fontFamily: "inherit",
            },
            formatter: (value) => `$${value.toFixed(0)}`,
            offsetX: -10,
          },
        },
        tooltip: {
          enabled: true,
          followCursor: false,
          intersect: false, // Changed to false for better performance
          shared: true, // Changed to true for better performance
          theme: "dark",
          style: {
            fontSize: "12px",
            fontFamily: "inherit",
          },
          marker: {
            show: false,
          },
          y: {
            formatter: (value) => `$${value.toFixed(2)}`,
          },
        },
        legend: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                height: '100%',
                width: '100%'
              },
              xaxis: {
                labels: {
                  show: false
                }
              }
            },
          },
        ],
      };

      // Set chart series
      chartSeriesRef.current = [
        {
          name: "Balance",
          data: sampleData.map((item) => item.amount),
        },
      ];

      setChartReady(true);
    }
  }, [sampleData, chartReady]);

  // Update chart data when dependencies change
  useEffect(() => {
    if (chartOptionsRef.current && chartSeriesRef.current) {
      // Update only the data that changes
      chartOptionsRef.current.xaxis.categories = sampleData.map(
        (item) => item.date
      );
      chartSeriesRef.current[0].data = sampleData.map((item) => item.amount);
    }
  }, [sampleData]);

  return (
    <div className="flex flex-col md:flex-row items-center border border-blue-100 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
        <h2 className="font-semibold text-lg">Cash Balance</h2>
        <h1 className="font-extrabold text-5xl text-indigo-700">
          ${parseFloat(balance).toFixed(2)}
        </h1>

        <div className="flex flex-row gap-4 mt-4">
          <button className="px-4 py-2 bg-indigo-700 text-white font-medium rounded-lg shadow transition-colors flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Money
          </button>
          <button className="px-4 py-2 dark:bg-gray-700 hover:dark:bg-gray-800 bg-white border border-gray-300 hover:bg-gray-50 text-gray-400 font-medium rounded-lg shadow transition-colors flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Withdraw
          </button>
        </div>
      </div>
      
      {/* Balance History Chart */}
      <div className="w-full pr-6 h-64 md:h-auto md:border-l border-blue-100 dark:border-gray-700">
        {chartReady && chartOptionsRef.current && chartSeriesRef.current && (
          <div className="chart-container" style={{ width: '100%', height: '100%', minHeight: '200px' }}>
            <ReactApexChart
              options={chartOptionsRef.current}
              series={chartSeriesRef.current}
              type="line"
              height="100%"
              width="100%"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BalanceContainer;
