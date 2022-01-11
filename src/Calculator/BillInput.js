import styles from ""

export default function BillInput() {
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
}
