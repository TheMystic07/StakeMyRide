import React from 'react';


function Example() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Frequently Asked Questions</h3>
          </div>
          <div className="border-t border-gray-200">
            <Disclosure as="dl">
              {({ open }) => (
                <>
                  <dt className="px-4 py-4 sm:px-6">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
                      <span className="text-lg font-medium text-gray-900">What is Tailwind CSS?</span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} h-6 w-6`} />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="px-4 sm:px-6 pb-4">
                    <p className="text-base text-gray-500">
                      Tailwind CSS is a utility-first CSS framework for quickly building custom designs. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.
                    </p>
                  </Disclosure.Panel>
                </>
              )}``
            </Disclosure>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Example;
