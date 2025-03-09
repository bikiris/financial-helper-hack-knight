const NewsContainer = ({ title, newsLink, imageURL, source, timestamp }) => {
  const openLink = () => {
    window.open(newsLink, "_blank", "noopener,noreferrer");
  };

  const convertTimestampToDate = (timestamp) => {
    // Handle the case when timestamp is undefined or null
    if (!timestamp) return "";

    try {
      // Parse timestamp in format "20250308T183000"
      const year = parseInt(timestamp.substring(0, 4));
      const month = parseInt(timestamp.substring(4, 6)) - 1; // Months are 0-indexed in JS
      const day = parseInt(timestamp.substring(6, 8));
      const hour = parseInt(timestamp.substring(9, 11));
      const minute = parseInt(timestamp.substring(11, 13));
      const second = parseInt(timestamp.substring(13, 15));

      const postTime = new Date(year, month, day, hour, minute, second);
      const currentTime = new Date();

      // Check if the date is valid
      if (isNaN(postTime.getTime())) {
        return "";
      }

      const timeDifference = currentTime - postTime;
      const timeDifferenceInSeconds = timeDifference / 1000;
      const timeDifferenceInMinutes = timeDifference / (1000 * 60);
      const timeDifferenceInHours = timeDifferenceInMinutes / 60;
      const timeDifferenceInDays = timeDifferenceInHours / 24;
      const timeDifferenceInWeeks = timeDifferenceInDays / 7;
      const timeDifferenceInMonths = timeDifferenceInDays / 30;
      const timeDifferenceInYears = timeDifferenceInDays / 365;

      if (timeDifferenceInSeconds < 60) {
        return timeDifferenceInSeconds < 5
          ? "Just now"
          : `${Math.floor(timeDifferenceInSeconds)} seconds ago`;
      }
      if (timeDifferenceInMinutes < 60) {
        return `${Math.floor(timeDifferenceInMinutes)} minutes ago`;
      }
      if (timeDifferenceInHours < 24) {
        return `${Math.floor(timeDifferenceInHours)} hours ago`;
      }
      if (timeDifferenceInDays < 7) {
        return `${Math.floor(timeDifferenceInDays)} days ago`;
      }
      if (timeDifferenceInWeeks < 4) {
        return `${Math.floor(timeDifferenceInWeeks)} weeks ago`;
      }
      if (timeDifferenceInMonths < 12) {
        return `${Math.floor(timeDifferenceInMonths)} months ago`;
      }
      if (timeDifferenceInYears >= 1) {
        return `${Math.floor(timeDifferenceInYears)} years ago`;
      }

      return "";
    } catch (error) {
      console.error("Error parsing timestamp:", error);
      return "";
    }
  };

  return (
    <div className='flex flex-col gap-4 p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 bg-gray-100'>
      <div className='overflow-hidden rounded-lg h-48'>
        <img
          src={imageURL}
          className='w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300'
          onClick={openLink}
          alt={title}
        />
      </div>

      <div className='flex justify-between text-sm text-gray-500'>
        <p className='font-medium'>{source}</p>
        <p>{convertTimestampToDate(timestamp)}</p>
      </div>

      <a
        href={newsLink}
        onClick={openLink}
        className='text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 self-start line-clamp-2 cursor-pointer'
        target='_blank'
        rel='noopener noreferrer'
      >
        {title}
      </a>
    </div>
  );
};

export default NewsContainer;
