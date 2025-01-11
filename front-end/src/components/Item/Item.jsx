import { useState } from "react";
import styles from "./Item.module.css";
export function Item({ word, translation, id }) {
    const [isTranslationShown, setIsTranslationShown] = useState(false);

    function handleDeleteClick() {
        alert(`Delete element with ID: ${id}`);
    }

    return (
        <li className={styles.item}>
            <span className={styles.word}>
                (PL) <strong>{word}</strong>
            </span>
            <span className={styles.word}>
                (ANG)
                <strong> {isTranslationShown ? translation : "******"}</strong>
            </span>
            <div className={styles.buttons}>
                <button
                    onClick={() =>
                        setIsTranslationShown((prevValue) => !prevValue)
                    }
                    className={styles.button}
                >
                    👁️
                </button>
                <button onClick={handleDeleteClick} className={styles.button}>
                    ✔️
                </button>
            </div>
        </li>
    );
}
