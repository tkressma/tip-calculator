import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Calculator.module.css";
import Input from "../UI/Input";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import TipCalculations from "./TipCalculations";

export default function Calculator(props) {
  const [bill, setBill] = useState({ value: 0, valid: true });
  const [people, setPeople] = useState({ value: 0, valid: true });
  const [tip, setTip] = useState(0);

  function billChangeHandler(e) {
    e.target.value < 1
      ? setBill({ value: 0, valid: false })
      : setBill({ value: e.target.value, valid: true });
  }

  function personChangeHandler(e) {
    e.target.value < 1
      ? setPeople({ value: 0, valid: false })
      : setPeople({ value: e.target.value, valid: true });
  }

  function tipChangeHandler(e) {
    setTip(+e.target.value.replace("%", ""));
  }

  return (
    <Card class={styles.calculator}>
      <main className={styles["calculator-container"]}>
        <Input
          title="Bill"
          label="bill-amount"
          input-type="field"
          icon={dollarIcon}
          value={bill}
          onChange={billChangeHandler}
          valid={bill.valid}
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
          value={people}
          onChange={personChangeHandler}
          valid={people.valid}
        />
        <TipCalculations
          data={{ bill: bill.value, people: people.value, tip: tip }}
        />
      </main>
    </Card>
  );
}
