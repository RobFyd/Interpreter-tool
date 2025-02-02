import { useState, useRef } from "react";
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
  const intervalRef = useRef(null);

  function handleStartClick() {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(
        () => setTime((prevTime) => prevTime + 1),
        1000
      );
    }
  }

  function handleStopClick() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <section className={styles.section}>
      <span className={styles.title}>Start your session!</span>
      <div className={styles.buttons}>
        <Button onClick={handleStartClick}>Start</Button>
        <Button onClick={handleStopClick}>Stop</Button>
      </div>
      <span className={styles.time}>{secondsToMinutes(time)}</span>
    </section>
  );
}
