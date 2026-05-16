import React from "react";
import styles from "./HomepageLanding.module.css";
import Link from "@docusaurus/Link";

const HomepageLanding = () => {
  return (
    <section className={styles.main}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.eyebrow}>STACKED</span>
        <h1 className={styles.heading}>
          Create your own poker table, settled on-chain on Base.
        </h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://stackedpoker.io"
          >
            Play Poker
          </Link>
          <Link
            className="button button--white button--lg"
            to="/docs/welcome/what-is-stacked"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageLanding;
