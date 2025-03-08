import StockItem from './StockItem';

const StockContainer = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <StockItem symbol='AAPL' name='Apple Inc.' stockPrice={145.9} currentValue={145.86} quantity={1} previousClose={140} purchasePrice={138}/>
      <StockItem symbol='COF' name='Capital One Financial Corp.' stockPrice={150.9} currentValue={150.86} quantity={1} previousClose={140} purchasePrice={138}/>
      <StockItem symbol='GOOGL' name='Alphabet Inc.' stockPrice={155.9} currentValue={155.86} quantity={1} previousClose={160} purchasePrice={170}/>
    </div>
  );
}

export default StockContainer;