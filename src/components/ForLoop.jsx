import React, { useState } from "react";
import { KeyWord, CodeBlock, Expression, Controls } from "./";
import Lexer from "../../lib/lexer";
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
                    <span
                        style={{
                            padding,
                            border: `${
                                highlightSectionRanges.keyWord.includes(step)
                                    ? "2px solid orange"
                                    : 0
                            }`,
                        }}
                    >
                        {lex.keyWord.map((word, index) => (
                            <span
                                key={`keword-${index}`}
                                style={{
                                    backgroundColor: `${
                                        step === 1 ? "cyan" : ""
                                    }`,
                                }}
                            >{`${word.text}`}</span>
                        ))}
                    </span>
                </KeyWord>
                {
                    <Expression>
                        <span
                            style={{
                                border: `${
                                    highlightSectionRanges.expression.includes(
                                        step
                                    )
                                        ? "2px solid orange"
                                        : 0
                                }`, // do not count () for steps
                            }}
                        >
                            {lex.expression.map((expression) => {
                                return expression.content.map((part, index) => {
                                    return (
                                        <span
                                            style={{
                                                backgroundColor: `${
                                                    part.step === step
                                                        ? "cyan"
                                                        : ""
                                                }`,
                                                padding,
                                            }}
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
                        style={{
                            border: `${
                                highlightSectionRanges.block.includes(step)
                                    ? "2px solid orange"
                                    : 0
                            }`,
                        }}
                    >
                        {lex.block.content.map((block, index) => {
                            let isFirst = index === 0;
                            let isLast = index === lex.block.content.length - 1;
                            let indentedPadding = "0px 10px";
                            return (
                                <>
                                    {isLast && <br />}
                                    <span
                                        style={{
                                            backgroundColor:
                                                block.step === step
                                                    ? "cyan"
                                                    : "",
                                            padding:
                                                !isFirst && !isLast
                                                    ? indentedPadding
                                                    : isLast
                                                    ? "0"
                                                    : padding,
                                        }}
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