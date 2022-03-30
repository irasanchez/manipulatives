import React from "react";

export default function Layout({ children, className }) {
    return (
        <div
            className="flex flex-col justify-between p-8 m-10 text-black border-t-4 border-b-8 border-l-4 border-r-8 border-black border-solid rounded-3xl"
            style={{ maxWidth: "700px", minHeight: "450px" }}
        >
            {children}
        </div>
    );
}
