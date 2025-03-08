// MobileBar.jsx
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
        icon: <ChartBarSquareIcon className='w-[32px] mx-auto' />,
        url: "/"
    },
    {
        title: "Chat Bot",
        icon: <ChatBubbleLeftRightIcon className='w-[32px] mx-auto' />,
        url: "/chatbot"
    },
    {
        title: "Courses",
        icon: <NewspaperIcon className='w-[32px] mx-auto' />,
        url: "/courses"
    },
    {
        title: "Reports",
        icon: <ServerStackIcon className='w-[32px] mx-auto' />,
        url: "/reports"
    }
];

export default function MobileBar() {
  return (// hidden sm:block
    <div className='md:hidden w-full z-50 pb-4 bg-indigo-700 dark:bg-gray-900 text-white border-indigo-200 dark:border-gray-800 border-t' style={{
      position: "fixed",
      bottom: "0px",
      right: "0px",
      left: "0px"
    }}>
        <div className="flex justify-evenly items-baseline space-x-4 p-2 text-white" style={{color: "white !important"}}>
          {links.map((link) => (
            <Link
              to={link.url}
              className="block items-center p-2 gap-2 text-base text-white rounded-lg hover:bg-indigo-600 group dark:text-gray-200 dark:hover:bg-gray-700 force-white text-[10px]"
              sidebarToggleItem={true}
            >
                {link.icon}
                {link.title}

            </Link>
          ))}
        </div>
    </div>
  );
}

/*



*/
