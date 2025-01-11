import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";

function App() {
    return (
        <main className={styles.main}>
            <Panel />
        </main>
    );
}

export default App;
