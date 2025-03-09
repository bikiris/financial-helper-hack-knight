import React, { useState } from 'react';

function Reports() {
  const [selectedMonth, setSelectedMonth] = useState('January 2025');

  // Sample data for demonstration
  const monthlyData = {
    'January 2025': {
      performance: {
        overall: 2.7,
        stocks: 3.2,
        bonds: 0.8,
        alternatives: 2.1
      },
      marketSummary: "Markets showed moderate growth in March despite inflation concerns. You took initiative and made some brilliant investment decisons to increase your gains for the month. Job well Done!",
      portfolioValue: 284350,
      previousValue: 276875,
      gains: 7475,
      topPerformers: [
        { name: 'NVDA', change: 8.4, allocation: 5.2 },
        { name: 'MSFT', change: 5.7, allocation: 6.8 },
        { name: 'AMZN', change: 4.9, allocation: 4.3 }
      ],
      underperformers: [
        { name: 'JPM', change: -2.3, allocation: 3.1 },
        { name: 'WMT', change: -1.8, allocation: 2.7 },
        { name: 'PG', change: -0.9, allocation: 2.2 }
      ],
      assetAllocation: [
        { category: 'US Stocks', percentage: 42 },
        { category: 'International Stocks', percentage: 18 },
        { category: 'Bonds', percentage: 25 },
        { category: 'Alternatives', percentage: 10 },
        { category: 'Cash', percentage: 5 }
      ]
    },
    'February 2025': {
      performance: {
        overall: -1.2,
        stocks: -1.8,
        bonds: 0.3,
        alternatives: -0.5
      },
      marketSummary: "February saw a market correction after January's rally. Higher than expected inflation data prompted concerns about additional rate hikes, affecting most sectors negatively. You made some poor investment decisions and your portfolio took a hit. Don't worry, you can always recover from this.",
      portfolioValue: 276875,
      previousValue: 280239,
      gains: -3364,
      topPerformers: [
        { name: 'GLD', change: 3.1, allocation: 2.3 },
        { name: 'XLE', change: 2.6, allocation: 3.7 },
        { name: 'JNJ', change: 1.8, allocation: 2.1 }
      ],
      underperformers: [
        { name: 'TSLA', change: -7.2, allocation: 2.9 },
        { name: 'AAPL', change: -4.5, allocation: 7.2 },
        { name: 'GOOGL', change: -3.8, allocation: 5.6 }
      ],
      assetAllocation: [
        { category: 'US Stocks', percentage: 41 },
        { category: 'International Stocks', percentage: 19 },
        { category: 'Bonds', percentage: 24 },
        { category: 'Alternatives', percentage: 11 },
        { category: 'Cash', percentage: 5 }
      ]
    }
  };

  const data = monthlyData[selectedMonth];
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value}%`;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Investment Reports</h1>
        
        <div className="flex items-center">
          <label htmlFor="month-select" className="mx-2 ">Select Month</label>
          <select 
            id="month-select"
            className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-400 font-medium rounded-lg shadow transition-colors flex items-center gap-2"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {Object.keys(monthlyData).map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">{selectedMonth} Performance Report</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-500 mb-1">Current Portfolio Value</p>
            <p className="text-2xl font-bold">{formatCurrency(data.portfolioValue)}</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-500 mb-1">Monthly Change</p>
            <p className={`text-2xl font-bold ${data.gains >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(data.gains)} ({formatPercentage(data.performance.overall)})
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-500 mb-1">YTD Return</p>
            <p className="text-2xl font-bold text-blue-600">+9.8%</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Market Summary</h3>
          <p className="text-gray-700">{data.marketSummary}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Asset Class Performance</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Stocks</span>
                <span className={data.performance.stocks >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {formatPercentage(data.performance.stocks)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Bonds</span>
                <span className={data.performance.bonds >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {formatPercentage(data.performance.bonds)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Alternatives</span>
                <span className={data.performance.alternatives >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {formatPercentage(data.performance.alternatives)}
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Asset Allocation</h3>
            <div className="space-y-2">
              {data.assetAllocation.map(asset => (
                <div key={asset.category} className="flex justify-between items-center">
                  <span>{asset.category}</span>
                  <span>{asset.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Top Performers</h3>
          <div className="space-y-4">
            {data.topPerformers.map(stock => (
              <div key={stock.name} className="flex justify-between items-center border-b border-gray-300 pb-2">
                <div>
                  <p className="font-medium">{stock.name}</p>
                  <p className="text-sm text-gray-500">Allocation: {stock.allocation}%</p>
                </div>
                <p className="text-green-600 font-bold">{formatPercentage(stock.change)}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Underperformers</h3>
          <div className="space-y-4">
            {data.underperformers.map(stock => (
              <div key={stock.name} className="flex justify-between items-center border-b border-gray-300 pb-2">
                <div>
                  <p className="font-medium">{stock.name}</p>
                  <p className="text-sm text-gray-500">Allocation: {stock.allocation}%</p>
                </div>
                <p className="text-red-600 font-bold">{formatPercentage(stock.change)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mt-6">
        <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-medium">Rebalancing Opportunity:</span> Your international stock allocation is slightly above target. Consider rebalancing to maintain your desired asset allocation.
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Tax-Loss Harvesting:</span> There may be opportunities to harvest losses in your underperforming positions to offset capital gains.
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Interest Rate Outlook:</span> With changing interest rate expectations, consider reviewing your bond duration strategy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reports;