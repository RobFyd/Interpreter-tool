import { useState, useEffect } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      });
  }, []);

  function handleFormSubmit(formData) {
    console.log(formData);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className={styles.section}>
        <Form onFormSubmit={handleFormSubmit} />
        <List data={data} />
      </section>
    </>
  );
}
