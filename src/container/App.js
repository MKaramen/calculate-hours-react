import React, { useState, useContext } from "react";
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
    buttonClicked: false
  });

  const hoursToMath = hours => {
    const hoursArray = hours.split(":");
    const hoursToMin = hoursArray[0] * 60;
    const hoursTotalMin = hoursToMin + parseInt(hoursArray[1]);
    return hoursTotalMin;
  };

  const totalHoursHandler = (startHourInput, endHourInput, event) => {
    if (startHourInput && endHourInput) {
      const startTotalMin = hoursToMath(startHourInput);
      const endTotalMin = hoursToMath(endHourInput);

      let resultTotalMin = endTotalMin - startTotalMin;

      if (resultTotalMin < 0) {
        resultTotalMin = 24 * 60 + resultTotalMin;
      }

      // When we click on the button it takes all the input and send it to the state
      // if (hoursState.buttonClicked) {
      //   console.log("in");
      //   const newTime = resultTotalMin + hoursState.totalMins;
      //   console.log(newTime);
      //   setHoursState({
      //     ...hoursState,
      //     totalMins: newTime,
      //     buttonClicked: false
      //   });
      // }
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

  const clickCalculateHandler = () => {
    setHoursState({
      ...hoursState,
      buttonClicked: true
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
