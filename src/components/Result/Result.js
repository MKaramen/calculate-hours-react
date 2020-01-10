import React from "react";
import styles from "./Result.module.css";

const Result = props => (
  <React.Fragment>
    <p className={styles.Result}>{props.children}</p>
  </React.Fragment>
);

export default Result;
