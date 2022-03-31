import React, { useState, useContext } from "react";
import { KeyWord, CodeBlock, Expression, Controls, ExpressionPart } from "./";
import { ForLoopContext } from "../lib/state";
import speechBubble from "../assets/pixel-speech-bubble.gif";
export default function ForLoop() {
    const { state } = useContext(ForLoopContext);
    const { lex, step, highlightSectionRanges, iterationCount } = state;
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
                                        ? "border-b-4 border-solid border-orange-500 inline-block py-1 px-2 "
                                        : "inline-block py-2 px-4 "
                                }`}
                            >
                                {lex.keyWord.map((word, index) => (
                                    <span
                                        key={`keword-${index}`}
                                        className={`${
                                            step === 1
                                                ? "bg-cyan-400 p-1  text-3xl"
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
                                            ? "border-b-4 border-solid border-orange-500 py-1 px-2 mx-2 inline-block"
                                            : "inline-block py-2 px-4 mx-4"
                                    }`}
                                >
                                    {lex.expression.map((expression) => {
                                        return expression.content.map(
                                            (part, index) => {
                                                return (
                                                    <ExpressionPart
                                                        isDeclaration={
                                                            expression.content[
                                                                index - 1
                                                            ]?.text === "="
                                                        }
                                                        isComparison={
                                                            expression.content[
                                                                index - 1
                                                            ]?.text === "<" ||
                                                            expression.content[
                                                                index - 1
                                                            ]?.text === ">" ||
                                                            expression.content[
                                                                index - 1
                                                            ]?.text === "<="
                                                        }
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
                                        ? "border-b-4 border-solid border-orange-500 p-2 "
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
                                                        ? "pl-16"
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
                    <div className="flex items-center justify-between mt-10 ">
                        <div className="relative w-full ">
                            <span className="text-8xl">💻</span>
                            {/* speech bubble made here https://pixelspeechbubble.com/ */}
                            <img
                                src={speechBubble}
                                className="absolute w-1/3 -top-5 left-10"
                            />
                            <span className="absolute font-bold text-red-500 left-1/3 -top-5 font-digital">
                                {iterationCount}
                            </span>
                        </div>
                        <Controls
                            activeSection={step}
                            limits={[
                                highlightSectionRanges.keyWord[0],
                                highlightSectionRanges.block[
                                    highlightSectionRanges.block.length - 1
                                ],
                            ]}
                        />
                    </div>
                </>
            )}
        </ForLoopContext.Consumer>
    );
}
