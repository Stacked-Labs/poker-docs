import React from "react";
import styles from "./styles.module.css";

/**
 * The 24-hour exit as a timeline: every settled hand resets the clock; after 24 hours with no
 * settled hand, the exit opens for every seated player.
 */
export default function ExitClock(): JSX.Element {
  return (
    <figure className={styles.figure} aria-label="How the 24-hour exit opens">
      <ol className={styles.track}>
        <li className={styles.step}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.when}>Normal play</span>
          <span className={styles.what}>Each settled hand resets the clock to zero.</span>
        </li>
        <li className={styles.step}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.when}>Hands stop settling</span>
          <span className={styles.what}>The clock runs from the last settled hand.</span>
        </li>
        <li className={styles.step}>
          <span className={`${styles.dot} ${styles.open}`} aria-hidden="true" />
          <span className={styles.when}>24 hours later</span>
          <span className={styles.what}>The exit opens. You withdraw your own stack to your wallet.</span>
        </li>
      </ol>
    </figure>
  );
}
