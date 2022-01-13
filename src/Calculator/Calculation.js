import React from "react";
import styles from "./Calculation.module.css";

export default function Calculation(props) {
  return (
    <div className={styles.calculation}>
      <section>
        <h2 class={styles["calculation-title"]}>{props.title}</h2>
        <p class={styles["calculation-info"]}>/ person</p>
      </section>

      <div className={styles["calculation-result"]}>
        $
        {props.title === "Tip Amount"
          ? props.tipCalculation
          : props.totalCalculation}
      </div>
    </div>
  );
}
