import { useState, useCallback } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";
import { SubPageMemo } from "./components/SubPage/SubPage";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [isPanelShown, setIsPanelShown] = useState(true);
  const [error, setError] = useState(null);

  const handleError = useCallback((error) => {
    setError(error.message);
    setTimeout(() => {
      setError(null);
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button
        onClick={() => {
          setIsPanelShown((prevIsPanelShown) => !prevIsPanelShown);
        }}
      >
        {isPanelShown ? "Hide panel" : "Show panel"}
      </Button>
      {isPanelShown && <Panel onError={handleError} />}
      <SubPageMemo />
    </main>
  );
}

export default App;
