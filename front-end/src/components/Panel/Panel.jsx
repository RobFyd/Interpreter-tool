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
    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        setData((prevData) => [...prevData, response]);
      });
  }

  function handleDeleteItem(id) {
    fetch(`http://localhost:3000/words/${id}`, {
      method: "DELETE",
    });
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className={styles.section}>
        <Form onFormSubmit={handleFormSubmit} />
        <List data={data} onDeleteItem={handleDeleteItem} />
      </section>
    </>
  );
}
