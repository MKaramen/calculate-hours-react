import React, { useEffect, useRef, useContext } from "react";
import styles from "./Field.module.css";
import HoursContext from "../../../context/hoursContext";
import FunctionContext from "../../../context/functionContext";

const Field = props => {
  const inputPlusRef = useRef(null);
  const inputMinusRef = useRef(null);

  const hoursFunc = useContext(FunctionContext);

  return (
    <div>
      <input
        ref={inputPlusRef}
        className={styles.Input}
        type="time"
        name="StartTime"
        onChange={() =>
          hoursFunc.totalHoursFunc(
            inputPlusRef.current.value,
            inputMinusRef.current.value
          )
        }
      />

      <input
        ref={inputMinusRef}
        className={styles.Input}
        type="time"
        name="EndTime"
        onChange={() =>
          hoursFunc.totalHoursFunc(
            inputPlusRef.current.value,
            inputMinusRef.current.value
          )
        }
      />
    </div>
  );
};

export default Field;
