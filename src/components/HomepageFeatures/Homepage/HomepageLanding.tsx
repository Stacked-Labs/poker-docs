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
        <Heading as="h1" className={clsx(styles.text, styles.heading)}>
          <img src={"/img/chips.png"} alt="logo" />
          {siteConfig.title}
        </Heading>
        <div>
          <p className={clsx(styles.text, styles.tagline)}>
            {siteConfig.tagline}
            <br />
          </p>
          <p className={clsx(styles.text, styles.subtitle)}>
            HOST AND PLAY FOR ANY ERC20
          </p>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/">
            Play Poker
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageLanding;
