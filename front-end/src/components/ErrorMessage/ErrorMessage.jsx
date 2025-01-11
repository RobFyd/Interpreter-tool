import styles from "./ErrorMessage.module.css";

export function ErrorMessage({ children }) {
    return <span className={styles.error}>{children}</span>;
}
