import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Calculator.module.css";
import Input from "../UI/Input";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import TipCalculations from "./TipCalculations";

export default function Calculator(props) {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);

  function billChangeHandler(e) {
    setBill(e.target.value);
  }

  function personChangeHandler(e) {
    setPeople(e.target.value);
  }

  function tipChangeHandler(e) {
    setTip(e.target.value);
  }

  return (
    <Card class={styles.calculator}>
      <main className={styles["calculator-container"]}>
        <Input
          title="Bill"
          label="bill-amount"
          input-type="field"
          icon={dollarIcon}
          onChange={billChangeHandler}
        />
        <Input
          title="Select Tip %"
          label="tip-percentage"
          onClick={tipChangeHandler}
        />
        <Input
          title="Number of People"
          label="people-count"
          input-type="field"
          icon={personIcon}
          onChange={personChangeHandler}
        />
        <TipCalculations />
      </main>
    </Card>
  );
}
