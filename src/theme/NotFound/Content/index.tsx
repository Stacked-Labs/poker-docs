import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const WAYS = [
  { label: "Docs home", to: "/" },
  { label: "What is Stacked Poker?", to: "/docs/welcome/what-is-stacked" },
  { label: "FAQ", to: "/docs/reference/faq" },
  { label: "Ask us on Discord", to: "https://discord.gg/xdaC5gRP4E" },
];

export default function NotFoundContent(): JSX.Element {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>This page isn't here</h1>
      <p className={styles.lede}>
        It may have moved when we updated the docs. One of these will get you back on track.
      </p>
      <ul className={styles.ways}>
        {WAYS.map((w) => (
          <li key={w.to}>
            <Link to={w.to} className={styles.way}>
              {w.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
