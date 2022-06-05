import * as React from 'react'

const ContactForm = () => (

    <div className="w-full flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 py-6 lg:px-28 px-8">
            <div className="md:flex items-center mt-12">
                <div className="md:w-72 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Name</label>
                    <input tabindex="0" arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Email Address</label>
                    <input tabindex="0" arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                </div>
            </div>
            <div className="md:flex items-center mt-8">
                <div className="md:w-full flex flex-col md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Subject</label>
                    <input tabindex="0" arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                </div>
            </div>
            <div>
                <div className="w-full flex flex-col mt-8">
                    <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Message</label>
                    <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"></textarea>
                </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 dark:text-gray-200 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
            <div className="flex items-center justify-center w-full">
                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none w-full">SUBMIT</button>
            </div>
        </div>
    </div>   
    
);

export default ContactForm