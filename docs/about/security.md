---
sidebar_position: 91
---

# Security & contracts

What the contracts do, what we've done to make them safe so far, what's still ahead, and how randomness works at the table.

## Smart contract security

Each real-money table is its own smart contract — a small program that holds money and follows fixed rules no one can change — deployed on Base, an Ethereum-based network with very low fees, when the Host creates the table. These table contracts are source-verified and readable on [Basescan](https://basescan.org), the public block explorer for Base, so the actual code each contract runs is open for anyone to inspect. We don't currently maintain a public GitHub repo for the contracts — that may change.

The contracts are intentionally simple. They have:

- Short functions with narrow input paths.
- No admin override. Once a contract is deployed, no one can change its behavior.
- No upgrade hook. The contract you sit at is the contract you stay at for that table's lifetime.
- Extensive unit-test coverage.
- A 24-hour emergency exit baked in as the unconditional player fallback.

**An external audit is on the roadmap and not yet complete.** Until that's done, the security story rests on simplicity, testing, the emergency exit, and what you can verify yourself on Basescan.

## Trust model

Stacked runs as two systems, each doing what it's best at. Full breakdown on [How custody works](/docs/your-money/custody).

In short: Stacked runs the game, and the on-chain contract holds the money. Your USDC, a digital dollar that holds a stable value, sits in the table contract — not with Stacked — and only the contract's rules can move it. You sign for any movement of your own funds, so your deposits and withdrawals are always under your control. Every real-money hand settles on-chain when it ends; settlement is fast (under 5 seconds on Base) and runs in the background, and you never pay gas — the small network fee for an on-chain action — to settle a hand or to create a table. If settlement ever stalls, the 24-hour emergency exit lets you pull your funds out yourself.

## Randomness (RNG)

Card shuffling happens on Stacked's servers using cryptographic randomness. This is the same model most online poker sites use; today there's no way to independently verify that a specific shuffle was honest.

**Verifiable on-chain shuffling is coming.** The plan is a commit-reveal scheme where each shuffle is committed on-chain before the hand and revealed at showdown, so any player can verify the cards weren't manipulated. When it ships, we'll document it here and on the [How a hand of Stacked works](/docs/welcome/how-a-hand-works) page.

Until then, the trust story for RNG is: standard cryptographic randomness, no public history of integrity issues, and the broader contract guarantees (custody, settlement, emergency exit) limit what bad RNG could cost you in the worst case.

## Reporting an issue

If you find a bug, vulnerability, or anything that looks wrong, reach out through the community channel. We take security reports seriously.

## What's next

- [How custody works →](/docs/your-money/custody)
- [24-hour emergency exit →](/docs/your-money/emergency-exit)
- [How Stacked works →](/docs/about/how-stacked-works)
- [What's next →](/docs/about/whats-next) — the broader roadmap.
