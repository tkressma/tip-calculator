import styles from "./Input.module.css";
export default function Input(props) {
  return props["input-type"] === "field" ? (
    <div className={styles["input-container"]}>
      <label for={props.label} className={styles["input-label"]}>
        {props.title}
      </label>
      <input
        style={{ backgroundImage: `url(${props.icon})` }}
        className={styles["input-field"]}
        type="number"
        name={props.label}
      ></input>
    </div>
  ) : (
    <div className={styles["input-container"]}>
      <label for={props.label} className={styles["input-label"]}>
        {props.title}
      </label>
      <div className={styles.percentages}>
        <label>
          <input type="radio" name={props.label} value=".05" />
          <span>5%</span>
        </label>
        <label>
          <input type="radio" name={props.label} value=".10" />
          <span>10%</span>
        </label>
        <label>
          <input type="radio" name={props.label} value=".15" />
          <span>15%</span>
        </label>
        <label>
          <input type="radio" name={props.label} value=".25" />
          <span>25%</span>
        </label>
        <label>
          <input type="radio" name={props.label} value=".5" />
          <span>50%</span>
        </label>
        <label>
          <input type="radio" name={props.label} value="custom" />
          <span>Custom</span>
        </label>
      </div>
    </div>
  );
}
