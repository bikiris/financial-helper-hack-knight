import BalanceContainer from "../components/BalanceContainer";
import NewsContainer from "../components/NewsContainer";
import StockContainer from "../components/StockContainer";

const Home = () => {
  return (
    <div className='grid gap-4 p-6'>
      <BalanceContainer balance={1000.0} />
      <div className='border border-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
        <div className='flex flex-row items-center justify-between p-6 border-b border-blue-100'>
          <h1 className='font-bold text-xl '>Stocks & ETFs</h1>
          <button className='px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow transition-colors flex items-center gap-2'>
            View All
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div className='p-6'>
          <StockContainer />
        </div>
      </div>
      <div className='border border-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
  <div className='flex flex-row items-center justify-between p-6 border-b border-blue-100'>
    <h1 className='font-bold text-xl'>Latest News</h1>
    <button className='px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow transition-colors flex items-center gap-2'>
      More News
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
  <div className='p-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <NewsContainer
        title={"Market Watch: Tech Stocks Continue to Rise"}
        newsLink={"https://www.google.com"}
        imageURL={"https://placehold.co/150x100/EEE/31343C"}
      />
      <NewsContainer
        title={"Federal Reserve Announces New Interest Rate Policy"}
        newsLink={"https://www.google.com"}
        imageURL={"https://placehold.co/150x100/EEE/31343C"}
      />
      <NewsContainer
        title={"Global Markets React to Economic Report"}
        newsLink={"https://www.google.com"}
        imageURL={"https://placehold.co/150x100/EEE/31343C"}
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
