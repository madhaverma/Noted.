import { useState, useEffect, useRef } from "react";
import styles from "./NoteModal.module.css";

export default function NoteModal({ note, onClose, onSave, saving }) {
  const isEdit = !!note?._id;
  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.description || "");
  const titleRef = useRef();

  useEffect(() => {
    titleRef.current?.focus();
  }, []);
 
  const handleSave = () => {
    if (!title.trim()) return;
    onSave({ title: title.trim(), description: description.trim() });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalLabel}>
            <svg className={styles.modalLabelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className={styles.modalLabelText}>
              {isEdit ? "Edit Note" : "New Manuscript"}
            </span>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg className={styles.closeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          <input
            ref={titleRef}
            className={styles.titleInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
          />
          <textarea
            className={styles.descInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Start your thought here..."
            rows={6}
          />
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={saving || !title.trim()}
          >
            {saving && (
              <svg className={styles.spinIcon} fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }} />
                <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" style={{ opacity: 0.75 }} />
              </svg>
            )}
            {isEdit ? "Update Note" : "Save Note"}
          </button>
        </div>
      </div>
    </div>
  );
}
