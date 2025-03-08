import StockItem from './StockItem';

const StockContainer = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <StockItem symbol='AAPL' name='Apple Inc.' stockPrice={145.9} currentValue={145.86} quantity={1} previousClose={140} purchasePrice={138}/>
      <StockItem symbol='GOOGL' name='Alphabet Inc.' stockPrice={2765.8} currentValue={2765.8} quantity={1} previousClose={2750} purchasePrice={2700}/>
      <StockItem symbol='MSFT' name='Microsoft Corporation' stockPrice={300.2} currentValue={300.2} quantity={1} previousClose={295} purchasePrice={290}/>
      <StockItem symbol='AMZN' name='Amazon.com Inc.' stockPrice={3456.8} currentValue={3456.8} quantity={1} previousClose={3500} purchasePrice={3800}/>
    </div>
  );
}

export default StockContainer;