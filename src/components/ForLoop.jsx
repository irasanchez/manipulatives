import React, { useState, useContext } from "react";
import { KeyWord, CodeBlock, Expression, Controls, ExpressionPart } from "./";
import { ForLoopContext } from "../lib/state";

export default function ForLoop() {
    const { state } = useContext(ForLoopContext);
    const { lex, step, highlightSectionRanges } = state;

    let [, /*step*/ setStep] = useState(1);
    // let highlightSectionRanges = {
    //     keyWord: [1],
    //     expression: [2, 3, 4],
    //     block: [5],
    // };
    const sectionIsActive = (section) => {
        return highlightSectionRanges[section].includes(step);
    };
    return (
        <ForLoopContext.Consumer>
            {() => (
                <>
                    <div>
                        <KeyWord>
                            <div
                                className={`${
                                    sectionIsActive("keyWord", step)
                                        ? "border-b-4 border-solid border-orange-600 inline-block py-1 px-2 "
                                        : "inline-block py-2 px-4 "
                                }`}
                            >
                                {lex.keyWord.map((word, index) => (
                                    <span
                                        key={`keword-${index}`}
                                        className={`${
                                            step === 1
                                                ? "bg-cyan-400 rounded p-1  text-3xl"
                                                : " text-xl p-1"
                                        }`}
                                    >{`${word.text}`}</span>
                                ))}
                            </div>
                        </KeyWord>
                        {
                            <Expression>
                                <span
                                    className={`${
                                        sectionIsActive("expression", step)
                                            ? "border-b-4 border-solid border-orange-600 py-1 px-2 mx-2 inline-block"
                                            : "inline-block py-2 px-4 mx-4"
                                    }`}
                                >
                                    {lex.expression.map((expression) => {
                                        return expression.content.map(
                                            (part, index) => {
                                                return (
                                                    <ExpressionPart
                                                        content={part.text}
                                                        key={`expression-${index}`}
                                                        isActive={
                                                            part.step === step
                                                        }
                                                        mutable={
                                                            part.manipulative
                                                        }
                                                    />
                                                );
                                            }
                                        );
                                    })}
                                </span>
                            </Expression>
                        }

                        <CodeBlock>
                            <span
                                className={`${
                                    sectionIsActive("block", step)
                                        ? "border-b-4 border-solid border-orange-600 p-2 "
                                        : "p-4"
                                }`}
                            >
                                {lex.block.content.map((block, index) => {
                                    let isFirst = index === 0;
                                    let isLast =
                                        index === lex.block.content.length - 1;
                                    return (
                                        <>
                                            {isLast && <br />}
                                            <span
                                                className={`${
                                                    block.step === step
                                                        ? "bg-cyan-400 text-3xl"
                                                        : "text-xl p-4"
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
                    <br />
                    <Controls
                        activeSection={step}
                        limits={[
                            highlightSectionRanges.keyWord[0],
                            highlightSectionRanges.block[
                                highlightSectionRanges.block.length - 1
                            ],
                        ]}
                    />
                </>
            )}
        </ForLoopContext.Consumer>
    );
}
