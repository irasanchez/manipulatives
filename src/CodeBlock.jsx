import React from "react";


export function CodeBlock({ lines, lineContents, style }) {
  return (
    <span style={style}>
      <span>{"{"}</span>
      <br />
      {lineContents.map((line) => (
        <>
          <span style={{ marginLeft: "30px" }}>{line}</span>
          <br />
        </>
      ))}
      <span>{"}"}</span>
    </span>
  );
}
