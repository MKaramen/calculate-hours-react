import React from "react";
import styles from "./Fields.module.css";
import Field from "./Field/Field";

const Fields = props => {
  const fields = props.numberField.map((field, index) => {
    return <Field key={index} keyArray={index} />;
  });

  return <div className={styles.Fields}>{fields}</div>;
};

export default Fields;
