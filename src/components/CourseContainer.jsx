import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

const CourseContainer = ({ imageURL, title, description, internalURL, locked }) => {
  return (
    <div className='w-full flex flex-row justify-between items-center p-4 border border-dotted border-gray-200 rounded-lg shadow-md my-4 hover:border-solid hover:border-blue-300'>
      <div className='flex flex-row items-center gap-4'>
        {locked ? (
          <img
            src="public/BlueLock.png"
            alt="Locked"
            className='max-w-[100px] mr-2 bg-gray-900' // Temporary background to blend white
          />
        ) : (
          <img
            src={imageURL}
            alt={title}
            className='max-w-[100px]'
          />
        )}
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl bold'>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <Link
        to={internalURL}
        className={`py-2 px-4 rounded-md border ${locked ? 'text-gray-400 border-gray-400 cursor-not-allowed' : 'text-blue-400 border-blue-400'}`}
      >
        Start Course
      </Link>
    </div>
  )

}

export default CourseContainer;