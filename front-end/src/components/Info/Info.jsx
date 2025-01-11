import styles from "./Info.module.css";

export function Info({ children }) {
    return (
        <section className={styles.section}>
            <p>Czy wiesz, że...</p>
            <br />
            <p>{children}</p>
        </section>
    );
}
