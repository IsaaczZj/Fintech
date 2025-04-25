import React, { CSSProperties } from "react";

const style: CSSProperties = {
  border: "var(--gap-sm) solid var(--color-tertiary)",
  borderRightColor: "var(--color-quaternary)",
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};


const Loading = () => {
  return <div style={style}>
    <style>
      {
        `
          @keyframes spin {
          to{
            transform:rotate(360deg)
          }
        }
        `
      }
    </style>
  </div>;
};

export default Loading;
