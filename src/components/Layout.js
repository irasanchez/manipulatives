import React from "react";

export default function Layout({ children }) {
    return (
        <div className="p-10">
            <div>
                <div>
                    <div className="w-full max-w-xl p-8 text-black border-4 border-black border-solid rounded-3xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
