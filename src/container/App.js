import React, { useState, useContext } from "react";
import "./App.css";
import Button from "../components/Button/Button";
import Fields from "../components/Fields/Fields";
import Result from "../components/Result/Result";

const App = props => {
  const [hoursState, setHoursState] = useState({
    totalHours: 0,
    countField: 1,
    countArray: [1]
  });

  const clickPlusHandler = () => {
    const newCountField = hoursState.countField + 1;
    const newArray = [...hoursState.countArray];
    newArray.push(newCountField);

    setHoursState({
      ...hoursState,
      countField: newCountField,
      countArray: newArray
    });
  };

  const clickMinusHandler = () => {
    const newCountField = hoursState.countField - 1;
    const newArray = [...hoursState.countArray];
    newArray.pop();
    if (newCountField > 0) {
      setHoursState({
        ...hoursState,
        countField: newCountField,
        countArray: newArray
      });
    } else {
      console.log("non nononononon");
    }
  };

  return (
    <div className="App">
      <h1>{props.appTitle}</h1>
      <Button clicked={clickPlusHandler}>+</Button>
      <Button clicked={clickMinusHandler}>-</Button>
      <Fields numberField={hoursState.countArray} />
      <Result>KEKW</Result>
    </div>
  );
};

export default App;
