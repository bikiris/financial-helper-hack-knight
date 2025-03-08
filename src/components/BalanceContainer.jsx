const BalanceContainer = ({ balance }) => {
  return (
    <div className="flex flex-col gap-4 p-6 border border-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="font-semibold text-lg ">Cash Balance</h2>
      <h1 className="font-extrabold text-5xl text-indigo-700">${parseFloat(balance).toFixed(2)}</h1>
      <div className="flex flex-row gap-4 mt-4">
        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Money
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-400 font-medium rounded-lg shadow transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default BalanceContainer;
