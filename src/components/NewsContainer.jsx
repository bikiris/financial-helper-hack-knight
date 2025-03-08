const NewsContainer = ({ title, newsLink, imageURL }) => {
  const openLink = (e) => {
    window.open(newsLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className='flex flex-col gap-4 p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-700'>
      <div className="overflow-hidden rounded-lg h-48">
        <img 
          src={imageURL} 
          className='w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300' 
          onClick={openLink}
          alt={title}
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-500">
        <p className="font-medium">News Source</p>
        <p>Timestamps</p>
      </div>

      <a 
        href={newsLink} 
        className='text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 self-start line-clamp-2'
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  );
};

export default NewsContainer;
