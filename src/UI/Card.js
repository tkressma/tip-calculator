import styles from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={`${styles.card} ${props.class}`}>{props.children}</div>
  );
}
