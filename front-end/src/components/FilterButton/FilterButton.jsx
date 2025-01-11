import styles from "./FilterButton.module.css";

export function FilterButton({ onClick, active, children }) {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${active ? styles.active : ""}`}
        >
            {children}
        </button>
    );
}
