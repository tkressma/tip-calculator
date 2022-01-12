import React from "react";
import styles from "./Results.module.css";
import Calculation from "./Calculation";
import Button from "../UI/Button";
export default function TipCalculations(props) {
  // Calculations to be displayed
  const tipPerPerson =
    (props.data.bill * (props.data.tip / 100)) / props.data.people;

  const totalPerPerson = props.data.bill / props.data.people + tipPerPerson;

  const handleReset = () => {
    props.resetCalculator();
  };

  return (
    <section className={styles["tip-results"]}>
      <div className={styles.results}>
        <Calculation
          title="Tip Amount"
          tipCalculation={!props.valid ? "0.00" : tipPerPerson.toFixed(2)}
        />
        <Calculation
          title="Total"
          totalCalculation={!props.valid ? "0.00" : totalPerPerson.toFixed(2)}
        />
      </div>
      <Button text="Reset" onClick={handleReset} />
    </section>
  );
}
