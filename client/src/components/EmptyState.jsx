import styles from "./EmptyState.module.css";

export default function EmptyState({ onNew }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconCircle}>
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </div>
      <h3 className={styles.title}>Nothing here yet</h3>
      <p className={styles.subtitle}>
        Start writing your thoughts, ideas, and notes — all in one place.
      </p>
      <button className={styles.btn} onClick={onNew}>
        + Create your first note
      </button>
    </div>
  );
}
