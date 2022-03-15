import React, { useState } from "react";
import { NumberInput } from "./NumberInput";


export function Expression({ delimiter, style, content, isActive }) {
  const [subActiveSection, setSubActiveSection] = useState(0);

  const generateExpression = () => {
    let expressionsJSX = [];
    expressionsJSX.push(<span style={{ marginRight: "5px" }}>(</span>);
    for (let i = 0; i < content.length; i++) {
      expressionsJSX.push(
        <span
          style={{
            backgroundColor: isActive && subActiveSection === i ? "cyan" : "",
          }}
        >
          {content[i]} {!content[i].includes("++") && <NumberInput value={0} />}
        </span>
      );
      if (i < content.length - 1) {
        expressionsJSX.push(
          <span style={{ marginRight: "5px" }}>{delimiter}</span>
        );
      }
    }
    expressionsJSX.push(<span style={{ margin: "0 5px" }}>{")"}</span>);
    return expressionsJSX;
  };

  return <span style={style}>{generateExpression()}</span>;
}
