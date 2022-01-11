import React from "react";
import styles from "./TipCalculations.module.css";
import Tips from "./Tips";
import TotalAmount from "./TotalAmount";
import Button from "../UI/Button";
export default function TipCalculations(props) {
  return (
    <section className={styles["tip-calculations"]}>
      <div className={styles["tip-calculations-container"]}>
        <Tips />
        <TotalAmount />
        <Button text="Reset" />
      </div>
    </section>
  );
}
