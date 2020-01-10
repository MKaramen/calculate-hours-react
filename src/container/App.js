import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "../components/Button/Button";
import Fields from "../components/Fields/Fields";
import Result from "../components/Result/Result";
import FunctionContext from "../context/functionContext";

const App = props => {
  const [hoursState, setHoursState] = useState({
    totalMins: 0,
    countField: 1,
    currentMins: 0,
    countArray: [],
    buttonClicked: false,
    totalMinArray: [],
    hour: "0"
  });

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

      const tempArray = [...hoursState.totalMinArray];
      tempArray[keyArray] = resultTotalMin;

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

  const clickCalculateHandler = () => {
    const resultArray = [...hoursState.totalMinArray];
    console.log(resultArray);

    let tempMin = hoursState.totalMins;

    resultArray.forEach(number => {
      if (number) {
        tempMin += number;
      }
    });

    const hours = Math.floor(tempMin / 60);
    const min = Math.floor(tempMin % 60);
    const finalHour = min < 10 ? `${hours}:0${min}` : `${hours}:${min}`;

    setHoursState({
      ...hoursState,
      currentMins: tempMin,
      totalMins: 0,
      hour: finalHour
    });
  };

  const clickResetHandler = e => {
    setHoursState({
      totalMins: 0,
      countField: 1,
      currentMins: 0,
      countArray: [],
      buttonClicked: false,
      totalMinArray: [],
      hour: "0"
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
      <Button clicked={clickResetHandler}>Reset</Button>

      <Result>{`Total des minutes : ${hoursState.currentMins}`}</Result>
      <Result>{`Total des heures : ${hoursState.hour}`}</Result>
    </div>
  );
};

export default App;
