import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import styles from "./Input.module.css";

export default function Input(props) {
  const [customTip, setCustomTip] = useState("");
  const [activeTip, setActiveTip] = useState();

  const handleCustomInputChange = (e) => {
    setCustomTip(e.target.value);
    setActiveTip(e.target.value);
    props.onClick(e);
  };

  const handleClick = (e) => {
    props.onClick(e);
    setCustomTip("");
    setActiveTip(e.target.value);
  };

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
        className={`${styles["input-field"]} ${
          !props.valid && styles["input-field--invalid"]
        }`}
        type="number"
        min="0"
        name={props.label}
        onChange={props.onChange}
      ></input>
    </section>
  ) : (
    <section className={styles["input-container"]}>
      <label className={styles["input-label"]} for="percentage">
        {props.title}
      </label>
      <div className={styles.percentages}>
        <input
          type="button"
          onClick={handleClick}
          className={`${styles.percent} ${
            activeTip === "5%" ? styles.active : ""
          }`}
          name="percentage"
          aria-label="Five percent tip"
          value="5%"
        />
        <input
          type="button"
          onClick={handleClick}
          className={`${styles.percent} ${
            activeTip === "10%" ? styles.active : ""
          }`}
          name="percentage"
          aria-label="Ten percent tip"
          value="10%"
        />
        <input
          type="button"
          onClick={handleClick}
          className={`${styles.percent} ${
            activeTip === "15%" ? styles.active : ""
          }`}
          name="percentage"
          aria-label="Fifteen percent tip"
          value="15%"
        />
        <input
          type="button"
          onClick={handleClick}
          className={`${styles.percent} ${
            activeTip === "25%" ? styles.active : ""
          }`}
          name="percentage"
          aria-label="Twenty-five percent tip"
          value="25%"
        />
        <input
          type="button"
          onClick={handleClick}
          className={`${styles.percent} ${
            activeTip === "50%" ? styles.active : ""
          }`}
          name="percentage"
          aria-label="Fifty percent tip"
          value="50%"
        />
        <input
          type="number"
          className={`${styles.percent} ${styles["percent--custom"]} ${
            activeTip === customTip ? styles.active : ""
          }`}
          name="percentage"
          min="0"
          max="100"
          aria-label="Custom tip"
          placeHolder="Custom"
          value={customTip}
          onChange={handleCustomInputChange}
        />
      </div>
    </section>
  );
}
