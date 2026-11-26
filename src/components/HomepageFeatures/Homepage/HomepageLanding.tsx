import React from "react";
import Link from "@docusaurus/Link";
import styles from "./HomepageLanding.module.css";

type Suit = "spade" | "heart" | "club" | "diamond";

const PIPS: Record<Suit, string> = {
  spade: "♠",
  heart: "♥",
  club: "♣",
  diamond: "♦",
};

type Section = {
  suit: Suit;
  title: string;
  line: string;
  to: string;
  links: { label: string; to: string }[];
};

const SECTIONS: Section[] = [
  {
    suit: "spade",
    title: "Getting started",
    line: "Sign in, play your first Free Play hand, then your first real-money hand.",
    to: "/docs/getting-started/first-free-play-hand",
    links: [
      { label: "Sign in", to: "/docs/getting-started/connect-a-wallet" },
      { label: "First Free Play hand", to: "/docs/getting-started/first-free-play-hand" },
      { label: "First real-money hand", to: "/docs/getting-started/first-real-money-hand" },
    ],
  },
  {
    suit: "heart",
    title: "Playing",
    line: "Joining a table, what you see once you sit down, cash games and tournaments.",
    to: "/docs/playing/joining-a-table",
    links: [
      { label: "Joining a table", to: "/docs/playing/joining-a-table" },
      { label: "At the table", to: "/docs/playing/at-the-table" },
      { label: "Tournaments", to: "/docs/playing/tournaments" },
    ],
  },
  {
    suit: "club",
    title: "Hosting",
    line: "Make a table or run a tournament for your group, and what you earn from it.",
    to: "/docs/hosting/overview",
    links: [
      { label: "Host a game", to: "/docs/hosting/overview" },
      { label: "What Hosts earn", to: "/docs/hosting/earnings" },
      { label: "Entry tasks", to: "/docs/hosting/entry-tasks" },
    ],
  },
  {
    suit: "diamond",
    title: "Your money",
    line: "Adding funds, cashing out, fees, and where your buy-in sits while you play.",
    to: "/docs/your-money/custody",
    links: [
      { label: "Add funds", to: "/docs/your-money/deposits" },
      { label: "Cash out", to: "/docs/your-money/withdrawals" },
      { label: "Fees", to: "/docs/your-money/fees" },
    ],
  },
];

const QUESTIONS: { q: string; to: string }[] = [
  { q: "Is Free Play the same as real-money play?", to: "/docs/playing/free-play-vs-real-money" },
  { q: "How much is the platform fee?", to: "/docs/your-money/fees" },
  { q: "What happens if hands stop settling?", to: "/docs/your-money/emergency-exit" },
  { q: "Which wallets can I sign in with?", to: "/docs/reference/supported-wallets" },
  { q: "Where can I play from?", to: "/docs/reference/availability" },
  { q: "Something isn't working", to: "/docs/reference/troubleshooting" },
];

const HomepageLanding = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroText}>
          <h1 id="home-title" className={styles.title}>
            Stacked Poker docs
          </h1>
          <p className={styles.lede}>
            Host a game for your group chat, or run your own tournament. These
            pages explain how playing, hosting and your money work, in plain
            words.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/docs/welcome/what-is-stacked">
              Start with the basics
            </Link>
            <Link className={styles.textLink} to="https://stackedpoker.io">
              Open Stacked Poker
            </Link>
          </div>
        </div>

        <aside className={styles.felt} aria-labelledby="felt-title">
          <h2 id="felt-title" className={styles.feltTitle}>
            Your buy-in sits in the table's own contract
          </h2>
          <p className={styles.feltBody}>
            Every real-money table holds its buy-ins in its own contract, not
            in a Stacked account. If hands stop settling for 24 hours, you can
            withdraw your own stack.
          </p>
          <ul className={styles.feltLinks}>
            <li>
              <Link to="/docs/your-money/custody">How custody works</Link>
            </li>
            <li>
              <Link to="/docs/your-money/emergency-exit">The 24-hour exit</Link>
            </li>
            <li>
              <Link to="/docs/reference/smart-contracts">Contract addresses</Link>
            </li>
          </ul>
        </aside>
      </section>

      <section className={styles.index} aria-labelledby="index-title">
        <h2 id="index-title" className={styles.sectionHead}>
          Find your way
        </h2>
        <ol className={styles.rows}>
          {SECTIONS.map((s) => (
            <li key={s.title} className={styles.row}>
              <span
                className={`${styles.pip} ${
                  s.suit === "heart" || s.suit === "diamond" ? styles.red : ""
                }`}
                aria-hidden="true"
              >
                {PIPS[s.suit]}
              </span>
              <div className={styles.rowText}>
                <Link to={s.to} className={styles.rowTitle}>
                  {s.title}
                </Link>
                <p className={styles.rowLine}>{s.line}</p>
              </div>
              <ul className={styles.rowLinks}>
                {s.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.questions} aria-labelledby="questions-title">
        <h2 id="questions-title" className={styles.sectionHead}>
          Common questions
        </h2>
        <ul className={styles.qList}>
          {QUESTIONS.map((q) => (
            <li key={q.to}>
              <Link to={q.to} className={styles.q}>
                {q.q}
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.more}>
          More in the <Link to="/docs/reference/faq">FAQ</Link>, or ask us on{" "}
          <Link to="https://discord.gg/xdaC5gRP4E">Discord</Link>.
        </p>
      </section>
    </div>
  );
};

export default HomepageLanding;
