import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

const CourseContainer = ({imageURL, title, description, internalURL}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center p-4 border border-dotted border-gray-200 rounded-lg shadow-md my-4 hover:border-solid hover:border-blue-300'>
      <div className='flex flex-row items-center gap-4'>
        <img src={imageURL} alt={title+' icon'} className='max-w-[800px]'/>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl bold'>{title}</h1>
          <p>{description}</p>
        </div>
        
      </div>
      <Link to={internalURL} className='py-2 px-4 rounded-md border'>Start Course</Link>
    </div>
  )

}

export default CourseContainer;