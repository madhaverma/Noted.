import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search your library of thoughts..."
        />
      </div>
    </section>
  );
}
