import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";

// Mirrors poker-server/poker/rake.go (defaults). 1 chip = $0.01.
const RAKE_RATE_PCT = 4;
const CAP_FLOOR = 2.0;
const CAP_BASE = 13.0;
const CAP_DECAY = 4.0;
const CAP_BB_ANCHOR = 0.1;
const CAP_MIN = 0.01;
const CAP_MAX = 6.0;

type Discount = { label: string; factor: number };
const DISCOUNTS: Discount[] = [
  { label: "Heads-up (2)", factor: 0.34 },
  { label: "Short-handed (3–4)", factor: 0.5 },
  { label: "Full ring (5+)", factor: 1.0 },
];

function fullCapDollars(bbDollars: number): number {
  if (!Number.isFinite(bbDollars) || bbDollars <= 0) return 0;
  const innerMult = CAP_BASE - CAP_DECAY * Math.log(bbDollars / CAP_BB_ANCHOR);
  const mult = Math.max(CAP_FLOOR, innerMult);
  return Math.max(CAP_MIN, Math.min(CAP_MAX, bbDollars * mult));
}

function formatBB(multiplier: number): string {
  if (!Number.isFinite(multiplier) || multiplier <= 0) return "—";
  // Two decimals for small multiples, one when ≥10
  return multiplier >= 10
    ? `${multiplier.toFixed(1)}× BB`
    : `${multiplier.toFixed(2)}× BB`;
}

export default function RakeCapCalculator(): JSX.Element {
  const [bb, setBb] = useState<string>("0.10");

  const bbDollars = parseFloat(bb);
  const rows = useMemo(() => {
    const full = fullCapDollars(bbDollars);
    return DISCOUNTS.map((d) => {
      const capDollars = full * d.factor;
      const mult = bbDollars > 0 ? capDollars / bbDollars : 0;
      return { ...d, capDollars, mult };
    });
  }, [bbDollars]);

  const valid = Number.isFinite(bbDollars) && bbDollars > 0;

  return (
    <div className={styles.calc}>
      <label className={styles.label} htmlFor="rake-cap-bb">
        Big blind (USDC)
      </label>
      <div className={styles.inputRow}>
        <span className={styles.prefix}>$</span>
        <input
          id="rake-cap-bb"
          className={styles.input}
          type="number"
          inputMode="decimal"
          min="0.01"
          step="0.01"
          value={bb}
          onChange={(e) => setBb(e.target.value)}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Table size</th>
            <th>Rake cap per hand</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td>{r.label}</td>
              <td>{valid ? formatBB(r.mult) : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className={styles.note}>
        Rake is still {RAKE_RATE_PCT}% of the pot — the cap only kicks in once
        the pot is large enough to exceed it. The cap is bounded by an absolute
        floor of $0.01 and a ceiling of $6.00 per hand.
      </p>
    </div>
  );
}
