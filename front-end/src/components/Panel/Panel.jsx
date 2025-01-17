import { useState, useEffect } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    })
      .then((response) => {
        if (response.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== id));
        } else {
          throw new Error("Failed to delete item");
        }
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 4000);
      });
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <section className={styles.section}>
        <Form onFormSubmit={handleFormSubmit} />
        <List data={data} onDeleteItem={handleDeleteItem} />
      </section>
    </>
  );
}
