Ten folder zawiera prosty serwer, dzięki któremu będziemy mogli odczytać listę tłumaczeń, dodać nowe tłumaczenie lub usunąć istniejące tłuamczenie.

Żeby uruchomić server wywołaj w terminalu na poziomie folderu `back-end` komendy:

```command
npm i
npm run dev
```

Możesz również wywołać te same komendy folder wyżej - wtedy uruchomisz jednocześnie server i projekt frontendowy.

### Model danych

Elementy zwracane i zapisywane do servera mają następujące pola:

```JSON
{
  "id": 1,
  "word": "kot",
  "translation": "cat",
  "category": "noun"
}
```

### Opis endpointów

| Ścieżka             | Metoda   | Jak działa?                                                                                                                   |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| /words              | `GET`    | Pobiera wszystkie elementy                                                                                                    |
| /words?category=XYZ | `GET`    | Pobiera elementy o kategorii `XYZ`                                                                                            |
| /words              | `POST`   | Dodaje element. Wymagania przesłania body z danymi nowego elementu, np: `{word: 'kot', translation: 'cat', category: 'noun'}` |
| /words/ID           | `DELETE` | Kasuje element o danym `ID`                                                                                                   |

### Przykłady użycia

<details>
 <summary> [GET] - <i>/words</i>  </summary>
<br>
Wywołanie:

```js
fetch("http://localhost:3000/words")
    .then((res) => res.json())
    .console.log((res) => res.json());
```

Consola:

```
[
    {
      "id": 1,
      "word": "kot",
      "translation": "cat",
      "category": "noun"
    },
    {
      "word": "skakać",
      "translation": "jump",
      "category": "verb",
      "id": 3
    }
  ]

```

</details>
<details>
 <summary> [GET] - <i>/words?category=XYZ</i>  </summary>
<br>
Wywołanie:

```js
fetch("http://localhost:3000/words?category=noun")
    .then((res) => res.json())
    .console.log((res) => res.json());
```

Consola:

```
[
    {
      "id": 1,
      "word": "kot",
      "translation": "cat",
      "category": "noun"
    }
  ]

```

## </details>

<details>
 <summary> [POST] - <i>/words</i>  </summary>
<br>
Wywołanie:

```js
fetch("http://localhost:3000/words", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        word: "pies",
        translation: "dog",
        category: "noun",
    }),
})
    .then((res) => res.json())
    .console.log((res) => res.json());
```

Consola:

```
    {
      "id": 3,
      "word": "pies",
      "translation": "dog",
      "category": "noun"
    }

```

</details>
