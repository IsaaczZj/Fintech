import React from "react";

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-secondary)",
  padding: "0.625rem 0.75rem",
  backgroundColor: "var(--color-quaternary)",
  borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-sm)",
  fontWeight: "600",
  ...generalStyle
};
const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle
};

type DateInputType = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: DateInputType) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

export default DateInput;
