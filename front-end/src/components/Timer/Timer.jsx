import { useState } from "react";
import styles from "./Timer.module.css";
import { Button } from "../Button/Button";

function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    return `${minutes}:${remainingSeconds}`;
}

export function Timer() {
    const [time, setTime] = useState(0);

    function handleStartClick() {}

    function handleStopClick() {}

    return (
        <section className={styles.section}>
            <span className={styles.title}>Zacznij sesję!</span>
            <div className={styles.buttons}>
                <Button onClick={handleStartClick}>Start</Button>
                <Button onClick={handleStopClick}>Stop</Button>
            </div>
            <span className={styles.time}>{secondsToMinutes(time)}</span>
        </section>
    );
}
