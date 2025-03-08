import BalanceContainer from "../components/BalanceContainer";
import NewsContainer from "../components/NewsContainer";

const Home = () => {  
  return (
    <div>
      
      <BalanceContainer balance={1000.00} />
      <div className="grid grid-cols-3 gap-4">
        <NewsContainer title={'News 1'} newsLink={'https://www.google.com'} imageURL={'https://placehold.co/150x100/EEE/31343C'} />
      </div>
    </div>
  );
}

export default Home;