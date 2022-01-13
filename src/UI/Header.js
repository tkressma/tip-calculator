import styles from "./Header.module.css";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <div class={styles.logo}>
      <img src={logo} alt="SPLITTER logo" />
    </div>
  );
}
