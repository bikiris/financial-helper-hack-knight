const BalanceContainer = ({ balance }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border border-dotted border-gray-200 rounded-lg shadow-md">
      <h2 className="font-bold text-xl">Cash balance</h2>
      <h1 className="font-bold text-5xl">${parseFloat(balance).toFixed(2)}</h1>
      <div className="flex flex-row gap-4 mt-4">
        <button>Add money</button>
        <button>Withdraw </button>
      </div>
    </div>
  );
};

export default BalanceContainer;
