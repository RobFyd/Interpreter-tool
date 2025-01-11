import { useState } from "react";
import styles from "./Form.module.css";
import { Button } from "../Button/Button";

export function Form() {
    const [word, setWord] = useState("");
    const [translation, setTranslation] = useState("");
    const [category, setCategory] = useState("noun");

    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            word,
            translation,
            category,
        };

        alert(JSON.stringify(newItem));
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
                <div className={styles.cell}>
                    <label htmlFor="word">Słowo</label>
                    <input
                        type="text"
                        id="word"
                        className={styles.input}
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                </div>
                <div className={styles.cell}>
                    <label htmlFor="translation">Tłumaczenie</label>
                    <input
                        type="text"
                        id="translation"
                        className={styles.input}
                        value={translation}
                        onChange={(e) => setTranslation(e.target.value)}
                    />
                </div>
            </div>
            <div>Wybierz kategorię:</div>
            <div className={styles.category}>
                <input
                    type="radio"
                    name="category"
                    id="category-noun"
                    checked={category === "noun"}
                    onChange={() => setCategory("noun")}
                />
                <label htmlFor="category-noun">Rzeczownik</label>
            </div>
            <div className={styles.category}>
                <input
                    type="radio"
                    name="category"
                    id="category-verb"
                    checked={category === "verb"}
                    onChange={() => setCategory("verb")}
                />
                <label htmlFor="category-verb">Czasownik</label>
            </div>
            <div>
                <Button>Dodaj</Button>
            </div>
        </form>
    );
}
