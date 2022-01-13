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
    <section>
      <label for={props.label} className={styles["input-label"]}>
        {props.title}
      </label>
      {invalidErrorMessage}

      <input
        style={{ backgroundImage: `url(${props.icon})` }}
        className={`${styles["input-field"]} ${
          !props.valid && styles["input-field--invalid"]
        }`}
        type="number"
        value={props.value}
        id={props.label}
        name={props.label}
        onChange={props.handleValue}
        onFocus={props.handleValue}
        placeholder="0"
      ></input>
    </section>
  ) : (
    <section className={styles["input-container"]}>
      <fieldset name="tip-percentages" id="tip-percentages">
        <legend className={styles["input-label"]}>{props.title}</legend>
        <div className={styles.percentages}>
          <input
            type="button"
            onClick={props.handleClick}
            className={`${styles.percent} ${
              props.tip === "5" ? styles.active : ""
            }`}
            name="Five percent tip"
            value="5%"
          />
          <input
            type="button"
            onClick={props.handleClick}
            className={`${styles.percent} ${
              props.tip === "10" ? styles.active : ""
            }`}
            name="Ten percent tip"
            value="10%"
          />
          <input
            type="button"
            onClick={props.handleClick}
            className={`${styles.percent} ${
              props.tip === "15" ? styles.active : ""
            }`}
            name="Fifteen percent tip"
            value="15%"
          />
          <input
            type="button"
            onClick={props.handleClick}
            className={`${styles.percent} ${
              props.tip === "25" ? styles.active : ""
            }`}
            name="Twenty-five percent tip"
            value="25%"
          />
          <input
            type="button"
            onClick={props.handleClick}
            className={`${styles.percent} ${
              props.tip === "50" ? styles.active : ""
            }`}
            name="Fifty percent tip"
            value="50%"
          />
          <input
            type="number"
            className={`${styles.percent} ${styles["percent--custom"]} ${
              props.tip === props.customTip ? styles.active : ""
            }`}
            min="0"
            max="100"
            name="Custom tip"
            placeHolder="Custom"
            onChange={props.changeCustomTip}
            value={props.customTip}
          />
        </div>
      </fieldset>
    </section>
  );
}
