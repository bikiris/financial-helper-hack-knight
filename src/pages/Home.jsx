import BalanceContainer from "../components/BalanceContainer";
import NewsContainer from "../components/NewsContainer";
import StockContainer from "../components/StockContainer";

const Home = () => {  
  return (
    <div className="grid gap-2">
      
      <BalanceContainer balance={1000.00} />
      
      <StockContainer />
      <div className="grid grid-cols-3 gap-4">
        <NewsContainer title={'News 1'} newsLink={'https://www.google.com'} imageURL={'https://placehold.co/150x100/EEE/31343C'} />
      </div>
    </div>
  );
}

export default Home;