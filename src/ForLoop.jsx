import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Expression } from "./Expression";
import { KeyWord } from "./KeyWord";

export function ForLoop({ activeSection, setActiveSection, isPlaying }) {
  console.log(activeSection, typeof activeSection);

  return (
    <>
      {" "}
      <KeyWord
        style={{
          marginRight: "5px",
          border: activeSection === 0 ? "3px solid orange" : "",
          padding: "0 2px",
        }}
        word="for" />{" "}
      <Expression
        isActive={activeSection === 1}
        activeSection={activeSection}
        delimiter=";"
        style={{
          border: activeSection === 1 ? "3px solid orange" : "",
          padding: "0 2px",
        }}
        content={["let i = ", "i < ", "i ++"]} />{" "}
      <CodeBlock
        lines={3}
        lineContents={["console.log(count)"]}
        style={{
          border: activeSection === 2 ? "3px solid orange" : "",
          padding: "0 2px",
        }} />
    </>
  );
}
