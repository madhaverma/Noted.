import styles from "./SkeletonCard.module.css";

export default function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={`${styles.line} ${styles.titleLine}`} />
      <div className={`${styles.line} ${styles.textLineFull}`} />
      <div className={`${styles.line} ${styles.textLineLong}`} />
      <div className={`${styles.line} ${styles.textLineMedium}`} />
      <div className={styles.footer}>
        <div className={styles.dateBlock} />
        <div className={styles.tagBlock} />
      </div>
    </div>
  );
}
