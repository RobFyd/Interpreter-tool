import { useState, useEffect, useMemo } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { FilterButton } from "../FilterButton/FilterButton";
import { getCategoryInfo } from "../../utils/getCategoryInfo";
import { Info } from "../info/info";
import styles from "./Panel.module.css";

const url = "http://localhost:3000/words1";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    let isCanceled = false;
    const params = selectedCategory ? `?category=${selectedCategory}` : "";
    fetch(`${url}${params}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Failed to fetch data");
      })
      .then((response) => {
        if (!isCanceled) {
          setData(response);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 4000);
        setIsLoading(false);
      });

    return () => {
      isCanceled = true;
    };
  }, [selectedCategory]);

  const categoryInfo = useMemo(
    () => getCategoryInfo(selectedCategory),
    [selectedCategory]
  );

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
        <Info>{categoryInfo}</Info>
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
