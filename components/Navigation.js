import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'


const pages = [
  {
    text: 'HW 1',
    href: '/'
  },
  {
    text: 'HW 2',
    href: '/hw2'
  },
  {
    text: 'HW 3',
    href: '/hw3'
  },
  {
    text: 'HW 4',
    href: '/hw4'
  },
  {
    text: 'HW 5',
    href: '/hw5'
  },
  {
    text: 'HW 6',
    href: '/hw6'
  },
  {
    text: 'HW 7',
    href: '/hw7'
  },
  {
    text: 'HW 8',
    href: '/hw8'
  }
]

export default function Navigation() {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {pages.map(page => {
                    return (
                      <a
                        key={page.text}
                        href={page.href}
                        className={router.pathname == page.href ?
                          'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        }
                      >
                        {page.text}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {pages.map(page => {
                return (
                  <Disclosure.Button
                    as="a"
                    key={page.text}
                    href={page.href}
                    className={router.pathname == page.href ?
                      'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    }
                  >
                    {page.text}
                  </Disclosure.Button>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
