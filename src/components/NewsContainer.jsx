const NewsContainer = ({title, newsLink, imageURL}) => {
  const openLink = () => {
    window.open(newsLink, '_blank');
  };
  
  return (
    <div className='flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-md'
      onClick={openLink}>
      <img src={imageURL} />
      <h1>{title}</h1>
    </div>
  );
}

export default NewsContainer;