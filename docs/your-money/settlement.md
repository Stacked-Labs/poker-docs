---
sidebar_position: 51
---

# Per-hand settlement

Every real-money hand on Stacked settles on-chain when it ends — not at the end of the session, not in a daily batch.

Each real-money table is its own smart contract (a small program on the blockchain that holds the money and enforces the rules) deployed on Base (an Ethereum-based network with very low fees) when the Host creates it. When a hand finishes, that contract records the outcome on-chain.

## What gets settled

When a real-money hand finishes, the outcome is recorded on the table's contract:

- Every seated player's chip balance updates to reflect the hand's outcome.
- The platform fee (the small fee on real-money tables) is taken from the pot; Hosts earn 25% of the fee. (See [How fees work](/docs/your-money/fees) for the math.)

The on-chain record is the source of truth. Whatever stack you see in front of you at the table matches what the contract holds in your seat balance — they update together, hand by hand.

## How it feels

In normal operation, settlement is invisible. The next hand begins as soon as the previous one is done, and the outcome is recorded on-chain in the background. Settlement is typically under 5 seconds on Base, depending on network conditions, so by the time you're ready to act on the next hand it's already on-chain.

You don't pay any gas (the network fee for an on-chain action) for any of this — Stacked covers settlement gas on every hand, funded by the platform fee. The platform fee also covers the gas to create a table, so settling hands and creating tables are free for everyone at the table. The only gas you pay is the small network fee on the deposits and withdrawals you sign yourself.

## If a settlement is slow or fails

Settlement can occasionally be slow — network congestion or other transient issues, the kind of thing that happens on any blockchain. Stacked keeps trying. If it keeps failing, the table pauses between hands and Stacked works through whatever's wrong.

If settlements stay stuck for too long, the [24-hour emergency exit](/docs/your-money/emergency-exit) takes over. Settlement and emergency exit are the two halves of the same guarantee: settlement is what happens normally; emergency exit is what's there if "normally" ever breaks.

## Verifying a settlement

Every settlement is an on-chain transaction. You can see each one on the table's contract activity on Basescan if you ever want to verify a specific hand's outcome.

## What's next

- [How custody works →](/docs/your-money/custody) — what the contract holds and what it can do.
- [24-hour emergency exit →](/docs/your-money/emergency-exit) — the safety net behind settlement.
- [How fees work →](/docs/your-money/fees) — what gets taken on each pot.
