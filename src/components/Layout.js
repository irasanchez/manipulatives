import React from "react";

export default function Layout({ children }) {
    return (
        <div className="fixed bottom-0 right-0 z-50 p-10">
            <div className="relative">
                <div className="px-4 sm:px-5">
                    <div className="relative z-10 p-8 sm:p-10 xl:px-16 xl:pb-16 xl:pt-14 w-full max-w-xl bg-white rounded-3xl">
                        <a className="absolute right-7 top-7" href="#">
                            <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="13.495" y1="0.494975" x2="1.49498" y2="12.495" stroke="#326BFF" strokeWidth="1.4" /><line x1="12.505" y1="12.495" x2="0.505026" y2="0.494976" stroke="#326BFF" strokeWidth="1.4" /></svg>
                        </a>
                        <h3 className="mb-3 text-xs text-gray-300 font-heading font-medium uppercase tracking-widest">Cookies</h3>
                        <h2 className="mb-6 text-3xl text-body font-heading font-medium">Your choice</h2>
                        <p className="mb-9 text-darkBlueGray-400 max-w-sm">By clicking “Accept”, you agree to the storing of cookies on your device to enhance (...)</p>
                        <div className="sm:flex sm:items-center">
                            <div className="mb-6 sm:mb-0 sm:max-w-max"><a className="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Accept all</a></div>
                            <div className="text-center"><a className="inline-block sm:ml-16 text-xl text-blue-500 hover:text-blue-600 font-bold tracking-tight" href="#">Manage cookies</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}