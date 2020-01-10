import React from "react";
import styles from "./Button.module.css";

const Button = props => {
  let classButton;

  switch (props.children) {
    case "+":
      classButton = styles.Plus;
      break;
    case "-":
      classButton = styles.Minus;
      break;
    case "Calculer":
      classButton = styles.Calculate;
      break;
    case "Reset":
      classButton = styles.Reset;
      break;
    default:
      classButton = styles.Reset;
  }

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
