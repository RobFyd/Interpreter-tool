import styles from "./Info.module.css";

export function Info({ children }) {
  return (
    <section className={styles.section}>
      <p>Did you know that...</p>
      <br />
      <p>{children}</p>
    </section>
  );
}
