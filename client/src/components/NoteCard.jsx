import styles from "./NoteCard.module.css";
import { fmt } from "../utils/helpers";

export default function NoteCard({ note, onEdit, onDelete, deleting }) {
  const isDeleting = deleting === note._id;

  return (
    <div className={styles.card}>
      <div className={styles.actions}>
        <button className={styles.actionBtn} onClick={() => onEdit(note)}>
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>

        <button
          className={`${styles.actionBtn} ${styles.actionBtnDelete}`}
          onClick={() => onDelete(note._id)}
          disabled={isDeleting}
        >
          {isDeleting ? (
            <svg className={styles.spinIcon} fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : (
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          )}
        </button>
      </div>

      <h3 className={styles.title}>{note.title}</h3>
      <p className={styles.description}>{note.description}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{fmt(note.createdAt)}</span>
      </div>
    </div>
  );
}
