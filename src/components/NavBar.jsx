import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";


const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <div className='fixed w-full z-50'>
      <Disclosure as='nav' className='bg-gray-100 border-gray-200 border-b'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <div className='shrink-0'>
                <img
                  alt='Your Company'
                  src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500'
                  className='size-8'
                />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-white text-white"
                          : "text-gray-300 hover:bg-gray-200 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                  <BellIcon aria-hidden='true' className='size-6' />
                </button>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              {/* Mobile menu button */}
              <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon
                  aria-hidden='true'
                  className='block size-6 group-data-open:hidden'
                />
                <XMarkIcon
                  aria-hidden='true'
                  className='hidden size-6 group-data-open:block'
                />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
