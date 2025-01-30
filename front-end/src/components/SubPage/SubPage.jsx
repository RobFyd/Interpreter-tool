import { memo } from "react";
import styles from "./SubPage.module.css";

export function SubPage() {
  console.log("SubPage rendered");
  return (
    <section className={styles.section}>
      <p>
        The English language is the undisputed king of second languages
        worldwide. More people speak it as a second language than there are
        native speakers. It is the global lingua franca, used in diplomacy,
        science, technology, and the arts. This makes it immensely significant
        in today's global society.
      </p>

      <p>
        The early beginnings of English literacy date back to the 8th century,
        with the first known recorded word being "town." The development of
        English literature, from Beowulf to Shakespeare, has shaped the
        language, influencing the formation of its grammar and vocabulary.
      </p>

      <p>
        Among all words, "I" is the shortest complete sentence in English. It
        exemplifies the simplicity and flexibility of the language. At the same
        time, "I" is one of the most frequently used words, reflecting
        individualism and communication.
      </p>

      <p>
        The word "set" has an astonishing variety of meanings. The Oxford
        English Dictionary has recorded over 450 different definitions for this
        word. It spans contexts from arranging objects to setting records,
        illustrating the richness of English vocabulary.
      </p>

      <p>
        "Uncopyrightable" is one of the longest words in which no letter
        repeats. This unique word itself demonstrates the complexity and
        playfulness possible in the English language, both in its use and
        creation.
      </p>
    </section>
  );
}

export const SubPageMemo = memo(SubPage);
