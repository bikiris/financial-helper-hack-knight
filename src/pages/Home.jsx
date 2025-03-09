import { useEffect, useState } from "react";
import axios from "axios";
import BalanceContainer from "../components/BalanceContainer";
import NewsContainer from "../components/NewsContainer";
import StockContainer from "../components/StockContainer";


const API_URL = 'http://fortunate-mandy-bikiris-f6cfbd6d.koyeb.app/api/news';
//backup data if api fails
const newsData = [
  {
    title: "Market Watch: Tech Stocks Continue to Rise",
    newsLink: "https://www.google.com",
    image: "https://placehold.co/150x100/EEE/31343C",
    source: "Bloomberg",
    publishedAt: "20250308T183000",
  },
  {
    title: "Federal Reserve Announces New Interest Rate Policy",
    newsLink: "https://www.google.com",
    image: "https://placehold.co/150x100/EEE/31343C",
    source: "CNBC",
    publishedAt: "20250307T183000",
  },
  {
    title: "Global Markets React to Economic Report",
    newsLink: "https://www.google.com",
    image: "https://placehold.co/150x100/EEE/31343C",
    source: "Reuters",
    publishedAt: "20250306T183000",
  },
];

const Home = () => {

  const [news, setNews] = useState(newsData);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        console.log(response.data.data);
        setNews(response.data.data.slice(0, 6));
      })
      .catch(error => {
        if (error.code === 'ERR_NETWORK') {
          console.error("Network error: Server may not be running", error);
          // Fall back to static data if server is unavailable
          setNews(newsData);
        } else {
          console.error("Error fetching news:", error);
        }
      });
  }, []);


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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {news && news.map((news, index) => (
              <NewsContainer
                key={index}
                title={news.title}
                newsLink={news.url}
                imageURL={news.image}
                source={news.source}
                timestamp={news.publishedAt}
              />
            ))}
          </div>
        </div>
        
      </div>
      
        <BalanceContainer balance={12870.0} />
    </div>
  );
};

export default Home;
