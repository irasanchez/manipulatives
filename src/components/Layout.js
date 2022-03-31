import React from "react";

export default function Layout({ children, className }) {
    return (
        <div
            className="flex flex-col justify-between m-10 text-black border-t-4 border-b-8 border-l-4 border-r-8 border-black border-solid rounded-3xl"
            style={{ minWidth: "750px", maxWidth: "750px", minHeight: "450px" }}
        >
            <h2 className="block pr-4 mt-12 mb-12 font-bold text-right text-pink-600 bg-black text-7xl text-bold font-digital">
                For Loop
            </h2>
            <div className="p-8">{children}</div>
        </div>
    );
}
