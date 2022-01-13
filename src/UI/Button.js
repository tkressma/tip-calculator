import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={`${styles.button} ${!props.valid ? styles.inactive : ""}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
