import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Notes", to: "/notes" },
];

export default function Navbar({ onNew }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Noted.</h1>

      <div className={styles.right}>
        <nav className={styles.nav}>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button className={styles.btn} onClick={onNew}>
          + New Note
        </button>
      </div>
    </header>
  );
}
