import React, { useState } from "react";
import "./App.css";
import Button from "../components/Button/Button";
import Fields from "../components/Fields/Fields";
import Result from "../components/Result/Result";
import FunctionContext from "../context/functionContext";

const App = props => {
  const [hoursState, setHoursState] = useState({
    totalMins: 0,
    countField: 1,
    countArray: [1],
    buttonClicked: false,
    totalMinArray: []
  });

  const hoursToMath = hours => {
    const hoursArray = hours.split(":");
    const hoursToMin = hoursArray[0] * 60;
    const hoursTotalMin = hoursToMin + parseInt(hoursArray[1]);
    return hoursTotalMin;
  };

  const totalHoursHandler = (startHourInput, endHourInput, keyArray) => {
    if (startHourInput && endHourInput) {
      const startTotalMin = hoursToMath(startHourInput);
      const endTotalMin = hoursToMath(endHourInput);

      let resultTotalMin = endTotalMin - startTotalMin;

      if (resultTotalMin < 0) {
        resultTotalMin = 24 * 60 + resultTotalMin;
      }

      console.log(keyArray);
      // When we click on the button it takes all the input and send it to the state

      const tempArray = [...hoursState.totalMinArray];
      tempArray[keyArray] = resultTotalMin;
      console.log(tempArray);

      setHoursState({
        ...hoursState,
        totalMinArray: tempArray
      });
    }
  };

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
    const newTimeArray = [...hoursState.totalMinArray];
    newTimeArray.pop();
    newArray.pop();

    if (newCountField > 0) {
      setHoursState({
        ...hoursState,
        countField: newCountField,
        countArray: newArray,
        totalMinArray: newTimeArray
      });
    } else {
      console.log("non nononononon");
    }
  };

  const clickCalculateHandler = () => {
    const resultArray = [...hoursState.totalMinArray];
    resultArray.forEach(number => {
      const tempMin = hoursState.totalMins + number;
      setHoursState({ ...hoursState, totalMins: tempMin });
    });
  };

  return (
    <div className="App">
      <h1>{props.appTitle}</h1>
      <Button clicked={clickPlusHandler}>+</Button>
      <Button clicked={clickMinusHandler}>-</Button>
      <FunctionContext.Provider value={{ totalHoursFunc: totalHoursHandler }}>
        <Fields numberField={hoursState.countArray} />
      </FunctionContext.Provider>
      <Button clicked={clickCalculateHandler}>Calculer</Button>
      <Button clicked={clickMinusHandler}>Reset</Button>

      <Result>{`Total des minutes : ${hoursState.totalMins}`}</Result>
    </div>
  );
};

export default App;
