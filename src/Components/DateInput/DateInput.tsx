import React from "react";

import styles from "./DateInput.module.css";

type DateInputType = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: DateInputType) => {
  return (
    <div>
      <label className={styles.labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        className={styles.inputStyle}
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

export default DateInput;
