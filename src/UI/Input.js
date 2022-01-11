import React from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  const invalidErrorMessage = !props.valid && (
    <label
      for={props.label}
      className={`${styles["input-label"]} ${styles["input-label--invalid"]}`}
    >
      Can't be zero
    </label>
  );

  return props["input-type"] === "field" ? (
    <section className={`${styles["input-container"]}`}>
      <div className={styles["label-container"]}>
        <label for={props.label} className={styles["input-label"]}>
          {props.title}
        </label>
        {invalidErrorMessage}
      </div>

      <input
        style={{ backgroundImage: `url(${props.icon})` }}
        className={`${styles["input-field"]} ${!props.valid && styles.invalid}`}
        type="number"
        min="0"
        name={props.label}
        onChange={props.onChange}
      ></input>
    </section>
  ) : (
    <section className={styles["input-container"]}>
      <label for={props.label} className={styles["input-label"]}>
        {props.title}
      </label>
      <div className={styles.percentages}>
        <label>
          <input
            type="radio"
            name={props.label}
            onClick={props.onClick}
            value=".05"
          />
          <span>5%</span>
        </label>
        <label>
          <input
            type="radio"
            name={props.label}
            onClick={props.onClick}
            value=".10"
          />
          <span>10%</span>
        </label>
        <label>
          <input
            type="radio"
            name={props.label}
            onClick={props.onClick}
            value=".15"
          />
          <span>15%</span>
        </label>
        <label>
          <input
            type="radio"
            name={props.label}
            onClick={props.onClick}
            value=".25"
          />
          <span>25%</span>
        </label>
        <label>
          <input
            type="radio"
            name={props.label}
            onClick={props.onClick}
            value=".5"
          />
          <span>50%</span>
        </label>
        <label>
          <input
            type="radio"
            name={props.label}
            onClick={props.onClick}
            value="custom"
          />
          <span>Custom</span>
        </label>
      </div>
    </section>
  );
}
