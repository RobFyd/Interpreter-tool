import { useState, useEffect } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { FilterButton } from "../FilterButton/FilterButton";
import styles from "./Panel.module.css";

const url = "http://localhost:3000/words";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const params = selectedCategory ? `?category=${selectedCategory}` : "";
    fetch(`${url}${params}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      });
    console.log(`Effect! selectedCategory: ${selectedCategory}`);

    return () => {
      console.log(`Cleanup! selectedCategory: ${selectedCategory}`);
    };
  }, [selectedCategory]);

  useEffect(() => {
    const timeout = setTimeout(() => alert("Welcome to the Word Bank!"), 3000);

    return () => {
      clearTimeout(timeout);
      console.log(`Cleanup! alert`);
    };
  }, []);

  function handleFormSubmit(formData) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!selectedCategory || selectedCategory === response.category) {
          setData((prevData) => [...prevData, response]);
        }
      });
  }

  function handleDeleteItem(id) {
    fetch(`${url}/${id}`, {
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

  function handleFilterClick(category) {
    setSelectedCategory(category);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <section className={styles.section}>
        <Form onFormSubmit={handleFormSubmit} />
        <div className={styles.filters}>
          <FilterButton
            active={selectedCategory === null}
            onClick={() => handleFilterClick(null)}
          >
            All words
          </FilterButton>
          <FilterButton
            active={selectedCategory === "noun"}
            onClick={() => handleFilterClick("noun")}
          >
            Nouns
          </FilterButton>
          <FilterButton
            active={selectedCategory === "verb"}
            onClick={() => handleFilterClick("verb")}
          >
            Verbs
          </FilterButton>
        </div>
        <List data={data} onDeleteItem={handleDeleteItem} />
      </section>
    </>
  );
}
