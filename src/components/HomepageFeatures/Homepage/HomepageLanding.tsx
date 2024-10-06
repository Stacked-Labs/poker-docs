import React from "react";
import styles from "./HomepageLanding.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

const HomepageLanding = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.main}>
      <div>
        <div className={styles.flex}>
          <img src={"/img/chips.png"} alt="logo"
            height={70} />
          <Heading as="h1" className={clsx(styles.text, styles.heading)}>
            {siteConfig.title}
          </Heading>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://stackedpoker.io">
            Play Poker
          </Link>
          <Link
            className="button button--lg button--white"
            to="/docs/introduction/what-is-stacked"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageLanding;
