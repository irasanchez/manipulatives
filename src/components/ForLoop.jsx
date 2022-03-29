import React, { useState } from "react";
import { KeyWord, CodeBlock, Expression, Controls } from "./";
import Lexer from "../lib/lexer";
export default function ForLoop({ demo }) {
    let [lex, setLexer] = useState(new Lexer(demo).getLex());
    let [step, setStep] = useState(1);
    let highlightSectionRanges = {
        keyWord: [1],
        expression: [2, 3, 4],
        block: [5],
    };
    let padding = "0 5px";
    return (
        <>
            <Controls
                activeSection={step}
                setActiveSection={setStep}
                limits={[
                    highlightSectionRanges.keyWord[0],
                    highlightSectionRanges.block[
                        highlightSectionRanges.block.length - 1
                    ],
                ]}
            />
            <br />
            <div>
                <KeyWord>
                    <div
                        className={`${
                            highlightSectionRanges.keyWord.includes(step)
                                ? "border border-solid border-orange-600 py-1 px-2 inline-block"
                                : "inline-block"
                        }`}
                    >
                        {lex.keyWord.map((word, index) => (
                            <span
                                key={`keword-${index}`}
                                className={`${
                                    step === 1 ? "bg-cyan-400 rounded p-1" : ""
                                }`}
                            >{`${word.text}`}</span>
                        ))}
                    </div>
                </KeyWord>
                {
                    <Expression>
                        <span
                            className={`${
                                highlightSectionRanges.expression.includes(step)
                                    ? "border border-solid border-orange-600 py-1 px-2 mx-2 inline-block"
                                    : "inline-block"
                            }`}
                        >
                            {lex.expression.map((expression) => {
                                return expression.content.map((part, index) => {
                                    return (
                                        <span
                                            className={`${
                                                part.step === step
                                                    ? "bg-cyan-400"
                                                    : ""
                                            }
                                                py-0 px-1`}
                                            key={`expression-${index}`}
                                        >{`${part.text}`}</span>
                                    );
                                });
                            })}
                        </span>
                    </Expression>
                }

                <CodeBlock>
                    <span
                        className={`${
                            highlightSectionRanges.block.includes(step)
                                ? "border border-solid border-orange-600 py-1 px-2"
                                : ""
                        }`}
                    >
                        {lex.block.content.map((block, index) => {
                            let isFirst = index === 0;
                            let isLast = index === lex.block.content.length - 1;
                            return (
                                <>
                                    {isLast && <br />}
                                    <span
                                        className={`${
                                            block.step === step
                                                ? "bg-cyan-400"
                                                : ""
                                        } ${
                                            !isFirst && !isLast
                                                ? "pl-5"
                                                : isLast
                                                ? "0"
                                                : ""
                                        }`}
                                        key={`block-${index}`}
                                    >{`${block.text}`}</span>
                                    {isFirst && <br />}
                                </>
                            );
                        })}
                    </span>
                </CodeBlock>
            </div>
        </>
    );
}

/*

*/
