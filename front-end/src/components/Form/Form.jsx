import { useState } from "react";
import styles from "./Form.module.css";
import { Button } from "../Button/Button";

export function Form({ onFormSubmit }) {
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

    onFormSubmit(newItem);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label htmlFor="word">Polish Word</label>
          <input
            type="text"
            id="word"
            className={styles.input}
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <div className={styles.cell}>
          <label htmlFor="translation">Translation</label>
          <input
            type="text"
            id="translation"
            className={styles.input}
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
        </div>
      </div>
      <div>Select a category:</div>
      <div className={styles.category}>
        <input
          type="radio"
          name="category"
          id="category-noun"
          checked={category === "noun"}
          onChange={() => setCategory("noun")}
        />
        <label htmlFor="category-noun">Noun</label>
      </div>
      <div className={styles.category}>
        <input
          type="radio"
          name="category"
          id="category-verb"
          checked={category === "verb"}
          onChange={() => setCategory("verb")}
        />
        <label htmlFor="category-verb">Verb</label>
      </div>
      <div>
        <Button>Add</Button>
      </div>
    </form>
  );
}
