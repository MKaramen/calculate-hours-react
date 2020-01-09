import React from "react";
import styles from "./Fields.module.css";
import Field from "./Field/Field";

const Fields = props => {
  const fields = props.numberField.map((field, index) => {
    return <Field key={index} />;
  });

  return <React.Fragment>{fields}</React.Fragment>;
};

export default Fields;
