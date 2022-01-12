import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./Calculator.module.css";
import Input from "../UI/Input";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import Results from "./Results";

export default function Calculator(props) {
  const [bill, setBill] = useState({ value: 0, valid: true });
  const [people, setPeople] = useState({ value: 0, valid: true });
  const [tip, setTip] = useState(0);
  const [dataIsValid, setDataIsValid] = useState(false);
  const [customTip, setCustomTip] = useState("");

  // Check to make sure all values are given before calculating
  useEffect(() => {
    if (bill.value === 0 || people.value === 0 || tip === 0) {
      setDataIsValid(false);
      return;
    }

    setDataIsValid(true);
  }, [bill, people, tip]);

  // Update bill state when user changes input
  const billChangeHandler = (e) => {
    e.target.value < 1
      ? setBill({ value: 0, valid: false })
      : setBill({ value: e.target.value, valid: true });
  };

  // Update people state when user changes input
  const personChangeHandler = (e) => {
    e.target.value < 1
      ? setPeople({ value: 0, valid: false })
      : setPeople({ value: e.target.value, valid: true });
  };

  // Update tip state when user changes input
  // If a user had a custom tip set, remove its value so
  // that it displays the placeholder text ("Custom")
  const tipHandler = (e) => {
    setTip(e.target.value.replace("%", ""));
    setCustomTip("");
  };

  // Reset all state values when the user clicks on the reset button
  const resetHandler = () => {
    setBill((prev) => ({ ...prev, value: 0 }));
    setPeople((prev) => ({ ...prev, value: 0 }));
    setTip(0);
    setCustomTip("");
    setDataIsValid(false);
  };

  // When a user sets a custom tip, update both states.
  // This allows for the logic that applies the active state css styling.
  const customTipHandler = (e) => {
    setTip(+e.target.value);
    setCustomTip(+e.target.value);
  };

  return (
    <Card class={styles.calculator}>
      <main className={styles["calculator-container"]}>
        <Input
          title="Bill"
          label="bill-amount"
          input-type="field"
          icon={dollarIcon}
          value={bill.value}
          handleValue={billChangeHandler}
          valid={bill.valid}
        />
        <Input
          title="Select Tip %"
          label="tip-percentage"
          tip={tip}
          customTip={customTip}
          handleClick={tipHandler}
          changeCustomTip={customTipHandler}
        />
        <Input
          title="Number of People"
          label="people-count"
          input-type="field"
          icon={personIcon}
          value={people.value}
          handleValue={personChangeHandler}
          valid={people.valid}
        />
        <Results
          data={{ bill: bill.value, people: people.value, tip: tip }}
          valid={dataIsValid}
          resetCalculator={resetHandler}
        />
      </main>
    </Card>
  );
}
