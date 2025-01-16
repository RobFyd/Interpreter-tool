import { useState, useEffect } from "react";
import { List } from "../List/List";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <>
      <section className={styles.section}>
        <List data={data}></List>
      </section>
    </>
  );
}
