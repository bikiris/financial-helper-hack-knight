import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

const CourseContainer = ({imageURL, title, description, internalURL}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center p-4 border border-gray-200 rounded-lg shadow-md my-4'>
      <div className='flex flex-row items-center gap-4'>
        <img src={imageURL} alt={title+' icon'} className='max-w-[800px]'/>
        <div className='flex flex-col'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        
      </div>
      <Link to={internalURL} className='p-8 border'>Start Course</Link>
    </div>
  )

}

export default CourseContainer;