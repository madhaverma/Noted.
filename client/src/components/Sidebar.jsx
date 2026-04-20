import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "All Notes",
    to: "/notes",
    path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

export default function Sidebar({ onNew }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Library</h2>
        <p className={styles.subtitle}>Your Manuscripts</p>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ label, path, to }) =>
          to ? (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
              }
            >
              <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={path} />
              </svg>
              <span>{label}</span>
            </NavLink>
          ) : (
            <span key={label} className={styles.navItem}>
              <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={path} />
              </svg>
              <span>{label}</span>
            </span>
          )
        )}
      </nav>

      <div className={styles.footer}>
        <button className={styles.newNotebookBtn} onClick={onNew}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Notebook
        </button>
      </div>
    </aside>
  );
}
