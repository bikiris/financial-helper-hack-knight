const NewsContainer = ({ title, newsLink, imageURL }) => {
  const openLink = (e) => {
    window.open(newsLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className='flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-md'>
      <img src={imageURL} className='cursor-pointer' onClick={openLink} />
      <div className="flex gap-4">
        <p>News Source</p>
        <p>Timestamps</p>
      </div>

      <a href={newsLink} className='text-2xl self-start'>
        {title}
      </a>
    </div>
  );
};

export default NewsContainer;
