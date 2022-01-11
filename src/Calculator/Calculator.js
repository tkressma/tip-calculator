import React from "react";
import Card from "../UI/Card";
import styles from "./Calculator.module.css";
import Input from "../UI/Input";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

export default function Calculator(props) {
  return (
    <Card class={styles.calculator}>
      <main className={styles["calculator-container"]}>
        <Input
          title="Bill"
          label="bill-amount"
          input-type="field"
          icon={dollarIcon}
        />
        <Input title="Select Tip %" label="tip-percentage" />
        <Input
          title="Number of People"
          label="people-count"
          input-type="field"
          icon={personIcon}
        />
      </main>
    </Card>
  );
}
