import React from "react";
import styles from "./styles.module.css";

type Props = {
  /** Label on the way in. */
  inLabel?: string;
  /** Label on the way out. */
  outLabel?: string;
};

/**
 * The round trip of a real-money buy-in: wallet balance, the table's own contract, wallet balance.
 * Paper tiles for the player's side, a felt panel for the table, so the money's location reads at a
 * glance. Used on the custody, buying-in and hand walkthrough pages.
 */
export default function MoneyPath({
  inLabel = "Buy in",
  outLabel = "Stand up, Cash out",
}: Props): JSX.Element {
  return (
    <figure className={styles.figure} aria-label="Where your money sits">
      <div className={styles.row}>
        <div className={styles.tile}>
          <span className={styles.kicker}>You</span>
          <span className={styles.name}>Wallet balance</span>
        </div>
        <div className={styles.arrow}>
          <span className={styles.label}>{inLabel}</span>
          <span className={styles.line} aria-hidden="true" />
        </div>
        <div className={styles.felt}>
          <span className={styles.kickerLight}>While you play</span>
          <span className={styles.nameLight}>The table's own contract</span>
          <span className={styles.sub}>Holds your table stack. Not a Stacked account.</span>
        </div>
        <div className={styles.arrow}>
          <span className={styles.label}>{outLabel}</span>
          <span className={styles.line} aria-hidden="true" />
        </div>
        <div className={styles.tile}>
          <span className={styles.kicker}>You</span>
          <span className={styles.name}>Wallet balance</span>
        </div>
      </div>
      <figcaption className={styles.caption}>
        If hands stop settling for 24 hours, you can withdraw your own stack straight from the
        contract.
      </figcaption>
    </figure>
  );
}
