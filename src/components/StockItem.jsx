import { useState } from "react";

const StockItem = ({ symbol, name, stockPrice, currentValue, quantity, previousClose, purchasePrice }) => {
  // Add state to track expanded/collapsed state
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Calculate today's gain/loss in dollars and percentage
  const calculateTodaysGainLoss = () => {
    const gainLossAmount = (stockPrice - previousClose) * quantity;
    const gainLossPercent = previousClose !== 0 ? ((stockPrice - previousClose) / previousClose) * 100 : 0;
    
    return {
      amount: gainLossAmount.toFixed(2),
      percent: gainLossPercent.toFixed(2)
    };
  };

  // Calculate total gain/loss in dollars and percentage
  const calculateTotalGainLoss = () => {
    const totalCost = purchasePrice * quantity;
    const gainLossAmount = currentValue - totalCost;
    const gainLossPercent = totalCost !== 0 ? (gainLossAmount / totalCost) * 100 : 0;
    
    return {
      amount: gainLossAmount.toFixed(2),
      percent: gainLossPercent.toFixed(2)
    };
  };

  // Get calculated values
  const todaysGainLoss = calculateTodaysGainLoss();
  const totalGainLoss = calculateTotalGainLoss();
  
  // Helper function to determine text color based on value
  const getValueColor = (value) => {
    if (parseFloat(value) > 0) return "text-green-700";
    if (parseFloat(value) < 0) return "text-red-700";
    return "text-gray-700";
  };

  const getBgColorClass = () => {
    const value = parseFloat(todaysGainLoss.amount);
    if (value > 0) return "bg-green-100";
    if (value < 0) return "bg-red-100";
    return "bg-gray-700";
  };
  
  const getHoverBgColorClass = () => {
    const value = parseFloat(todaysGainLoss.amount);
    if (value > 0) return "hover:bg-green-200/50";
    if (value < 0) return "hover:bg-red-200/50";
    return "hover:bg-gray-200/50";
  };

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`p-4 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 ${getHoverBgColorClass()} cursor-pointer transition-all duration-200 ${isExpanded ? "" :"self-start"}`}
      onClick={toggleExpanded}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{symbol}</h2>
          <p className="text-gray-600">{name}</p>
        </div>
        <div>
          <p>
            <span className={getValueColor(todaysGainLoss.amount)}>
              ${todaysGainLoss.amount} ({todaysGainLoss.percent}%)
            </span>
          </p>
          <span className="text-gray-500 text-sm">
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="space-y-1 mt-3 pt-3 border-t border-gray-200">
          <p>Last Price: ${stockPrice.toFixed(2)}</p>
          <p>
            Total Gain/Loss: <span className={getValueColor(totalGainLoss.amount)}>
              ${totalGainLoss.amount} ({totalGainLoss.percent}%)
            </span>
          </p>
          <p>Current Value: ${currentValue.toFixed(2)}</p>
          <p>Quantity: {quantity}</p>
        </div>
      )}
    </div>
  );
}

export default StockItem;