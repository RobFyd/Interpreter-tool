import { useState } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";

function App() {
  const [isPanelShown, setIsPanelShown] = useState(true);
  return (
    <main className={styles.main}>
      <Button
        onClick={() => {
          setIsPanelShown((prevIsPanelShown) => !prevIsPanelShown);
        }}
      >
        {isPanelShown ? "Hide panel" : "Show panel"}
      </Button>
      {isPanelShown && <Panel />}
    </main>
  );
}

export default App;
