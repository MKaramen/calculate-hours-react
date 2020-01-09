import React, { useEffect, useRef } from "react";
import styles from "./Field.module.css";

const Field = props => {
  const inputPlusRef = useRef(null);
  const inputMinusRef = useRef(null);

  useEffect(() => {});

  return (
    <div>
      <input
        ref={inputPlusRef}
        className={styles.Input}
        type="time"
        name="StartTime"
      />
      <input
        ref={inputMinusRef}
        className={styles.Input}
        type="time"
        name="EndTime"
      />
    </div>
  );
};

export default Field;
