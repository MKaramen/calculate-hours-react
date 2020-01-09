import React from "react";
import styles from "./Button.module.css";

const Button = props => {
  const classButton = props.children === "+" ? styles.Plus : styles.Minus;
  return (
    <button
      className={`${classButton} ${styles.Button}`}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
