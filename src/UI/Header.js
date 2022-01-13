import styles from "./Header.module.css";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className={styles.logo}>
      <h1>
        <img src={logo} alt="SPLITTER logo" />
      </h1>
    </header>
  );
}
