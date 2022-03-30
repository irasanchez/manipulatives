import React from "react";
import { MutableExpressionPart } from "./";

export default function ExpressionPart({ content, isActive, mutable }) {
    if (!mutable) {
        return (
            <span
                className={`${
                    isActive
                        ? "bg-cyan-400 text-3xl py-0 px-1"
                        : " text-xl py-0 px-2"
                }
            `}
            >{`${content}`}</span>
        );
    } else {
        return (
            <span
                className={`${
                    isActive
                        ? "bg-cyan-400 text-3xl py-0 px-1"
                        : " text-xl py-0 px-2"
                }
        `}
            >
                <MutableExpressionPart content={content} isActive={isActive} />
            </span>
        );
    }
}
