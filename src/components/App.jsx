import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Controls, ForLoop, KeyWord, Expression, CodeBlock } from "./";
import Lexer from "../../lib/lexer";
function App() {
    let demos = ["for ( let i = 0; i < 10; i++ ) { console.log(i); }"];
    let [demoOptions, setDemoOptions] = useState(demos);
    let [lex, setLexer] = useState(new Lexer(demos[0]).getLex());
    let [step, setStep] = useState(1);
    let padding = "0 5px";
    return (
        <div className="App">
            <Controls activeSection={step} setActiveSection={setStep} />
            <br />
            <ForLoop>
                <div>
                    <KeyWord>
                        <span
                            style={{
                                padding,
                                border: `${
                                    step === 1 ? "2px solid orange" : 0
                                }`,
                            }}
                        >
                            {lex.keyWord.map((word, index) => (
                                <span
                                    key={`keword-${index}`}
                                >{`${word.text}`}</span>
                            ))}
                        </span>
                    </KeyWord>
                    {
                        <Expression>
                            <span
                                style={{
                                    border: `${
                                        step < 5 && step > 1
                                            ? "2px solid orange"
                                            : 0
                                    }`, // do not count () for steps
                                }}
                            >
                                {lex.expression.map((expression) => {
                                    return expression.content.map(
                                        (part, index) => {
                                            return (
                                                <span
                                                    style={{ padding }}
                                                    key={`expression-${index}`}
                                                >{`${part.text}`}</span>
                                            );
                                        }
                                    );
                                })}
                            </span>
                        </Expression>
                    }

                    <CodeBlock>
                        <span
                            style={{
                                border: `${step > 4 ? "2px solid orange" : 0}`,
                            }}
                        >
                            {lex.block.content.map((block, index) => {
                                let isFirst = index === 0;
                                let isLast =
                                    index === lex.block.content.length - 1;
                                let indentedPadding = "0px 10px";
                                return (
                                    <>
                                        {isLast && <br />}
                                        <span
                                            style={{
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
            </ForLoop>
        </div>
    );
}

export default App;
