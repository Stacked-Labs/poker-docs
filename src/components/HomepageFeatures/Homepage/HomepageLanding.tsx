import React from "react";
import styles from "./HomepageLanding.module.css";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const HomepageLanding = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.main}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.eyebrow}>STACKED</span>
        <h1 className={styles.heading}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://stackedpoker.io"
          >
            Play Poker
          </Link>
          <Link
            className="button button--white button--lg"
            to="/docs/introduction"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageLanding;
