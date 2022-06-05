import React, {useState} from "react"

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <button className="inline-flex items-center justify-center h-8 p-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none" type="button" data-modal-toggle="defaultModal" onClick={() => setModalOpen(!modalOpen)}>
            Subscribe
            </button>

            {modalOpen && (
                <div id="defaultModal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Newsletter Signup
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" onClick={() => setModalOpen(!modalOpen)}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Signup for our newsletter to receive the in time updates when additional content and articles are published.
                                </p>

                            </div>

                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"/>
                                
                                <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md focus:ring focus:ring-indigo-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                    Subscribe
                                </button>
                  
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal