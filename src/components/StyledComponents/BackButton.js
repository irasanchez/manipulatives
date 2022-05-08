import React from "react";
import { Link } from "react-router-dom";

export default function BackButton() {
    return (
        <Link
            to="/"
            className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 pl-0 pr-1 m-4 text-center Back-Button "
        >
            <span className="pl-1">⬅️</span>
        </Link>
    );
}
