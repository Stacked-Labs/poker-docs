import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Onchain settlement, instant cash-out",
    imgSrc: "/img/tables/table-vertical-green.webp",
    description: (
      <>
        Real cash games settled in USDC on Base. Your stack is your wallet — sit
        down, play, walk away. No room cashier, no withdrawals queue.
      </>
    ),
  },
  {
    title: "Penthouse, not casino floor",
    imgSrc: "/img/IconLogo.png",
    description: (
      <>
        Warm, intimate, table-grade UX built for poker players first. Cozy not
        corporate — designed for the friend who hosts the Friday-night game.
      </>
    ),
  },
  {
    title: "Mobile-first, made to play",
    imgSrc: "/img/chips.png",
    description: (
      <>
        Optimized for the way poker actually gets played in 2026 — phone in
        hand, between hands at the live table, on the way home from work.
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={styles.card}>
        <div className={styles.media}>
          <img src={imgSrc} alt="" loading="lazy" className={styles.mediaImg} />
          <div className={styles.mediaOverlay} aria-hidden="true" />
        </div>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardBody}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>WHY STACKED</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Built for the table, not the dashboard
          </Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
