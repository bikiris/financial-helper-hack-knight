import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

const CourseContainer = ({ imageURL, title, description, internalURL, locked, prereq}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center p-4 border border-dotted border-gray-200 rounded-lg shadow-md my-4 hover:border-solid hover:border-indigo-600'>
      <div className='flex flex-row items-center gap-4'>
        <div className="md:block hidden">
          {locked ? (
            <img
              src="public/BlueLock.png"
              alt="Locked"
              className='max-w-[100px] mr-2 bg-gray-900 rounded-lg'
            />
          ) : (
            <img
              src={imageURL}
              alt={title}
              className='max-w-[100px]'
            />
          )}
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <p>
            {locked && prereq && <span>Prereq: {prereq} <br /></span>}
            {description}
          </p>
          
          <Link
          to={internalURL}
          className={`block md:hidden py-2 px-4 rounded-md border ${locked ? 'text-gray-400 border-gray-400 cursor-not-allowed' : 'text-blue-400 border-indigo-400'}`}
          onClick = {(e) => locked && e.preventDefault()}
        >
          {locked ? 'Locked' : 'Start Course'}
          {locked &&(
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">
              Complete the prerequisite course to unlock 
            </span>
          )}
        </Link>
          
        </div>
        
        
        
      </div>
      <div className="md:block hidden">
        <Link
          to={internalURL}
          className={`py-2 px-4 rounded-md border ${locked ? 'text-gray-400 border-gray-400 cursor-not-allowed' : 'text-blue-400 border-indigo-400'}`}
          onClick = {(e) => locked && e.preventDefault()}
        >
          {locked ? 'Locked' : 'Start Course'}
          {locked &&(
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">
              Complete the prerequisite course to unlock 
            </span>
          )}
        </Link>
      </div>
      
      
    </div>
  );
};

export default CourseContainer;