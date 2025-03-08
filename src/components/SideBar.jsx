import { 
    BugAntIcon,
    ChartBarSquareIcon,
    ChatBubbleLeftRightIcon,
    NewspaperIcon,
    ServerStackIcon
} from "@heroicons/react/24/outline";

import {
    Link
} from "react-router-dom";

const links = [
    {
        title: "Dashboard",
        icon: <ChartBarSquareIcon className='w-[24px]' />,
        url: "/"
    },
    {
        title: "Chat Bot",
        icon: <ChatBubbleLeftRightIcon className='w-[24px]' />,
        url: "/chatbot"
    },
    {
        title: "Courses",
        icon: <NewspaperIcon className='w-[24px]' />,
        url: "/courses"
    },
    {
        title: "Reports",
        icon: <ServerStackIcon className='w-[24px]' />,
        url: "/reports"
    }
];

export default function SideBar() {
  return (
    <aside
      id='sidebar'
      className='fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width'
      ariaLabel='Sidebar'
    >
      <div className='relative w-full flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex flex-col flex-1 pt-5 pb-4 overflow-y-auto'>
          <div className='flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
            <ul className='pb-2 space-y-2'>
                {links.map( (link, i) => 
                    
                    <li key={i}>
                        
                        <Link
                          to={link.url}
                          className='flex items-center p-2 gap-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700'
                          sidebar-toggle-item
                        >
                            {link.icon}
                            {link.title}

                        </Link>
                        
                    </li>
                )}
              
            </ul>
            <div className='pt-2 space-y-2'>
              <a
                href=''
                target='_blank'
                className='flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700'
              >
                <BugAntIcon className='w-[24px]' />
                <span className='ml-3' sidebarToggleItem>
                    View Pro Version
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          className='absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800'
          sidebar-bottom-menu
        >
          <a
            href='#'
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
