---
sidebar_position: 91
---

# Security & contracts

What the contracts do, what we've done to make them safe so far, what's still ahead, and how randomness works at the table.

## Smart contract security

Stacked's table contracts are deployed and source-verified on [Basescan](https://basescan.org). The actual code each contract runs is readable on the block explorer. We don't currently maintain a public GitHub repo for the contracts — that may change.

The contracts are intentionally simple. They have:

- Short functions with narrow input paths.
- No admin override. Once a contract is deployed, no one can change its behavior.
- No upgrade hook. The contract you sit at is the contract you stay at for that table's lifetime.
- Extensive unit-test coverage.
- A 24-hour emergency exit baked in as the unconditional player fallback.

**An external audit is on the roadmap and not yet complete.** Until that's done, the security story rests on simplicity, testing, the emergency exit, and what you can verify yourself on Basescan.

## Trust model

Three parties touch a real-money table; each has a defined and limited role. Full breakdown on [How custody works](/docs/your-money/custody).

In short: Stacked runs the game off-chain and submits settlements; the contract holds the money and enforces the rules; you sign for any movement of your own funds. The backend can never move your money to anywhere but you, the platform fee recipient, or the Host's rake balance — those are the only paths the contract allows.

## Randomness (RNG)

Card shuffling happens on Stacked's backend using cryptographic randomness. This is the same model most online poker sites use; it's not provably-fair in the cryptographic sense (you can't independently verify a specific shuffle was honest).

**Provably-fair shuffling is on the roadmap.** The plan is a commit-reveal scheme where each shuffle is committed to on-chain before the hand and revealed at showdown, so any player can verify the cards weren't manipulated. When that ships, we'll document it here and on the [How a hand of Stacked works](/docs/welcome/how-a-hand-works) page.

Until then, the trust story for RNG is: standard cryptographic randomness, no public history of integrity issues, and the broader contract guarantees (custody, settlement, emergency exit) limit what bad RNG could cost you in the worst case.

## Reporting an issue

If you find a bug, vulnerability, or anything that looks wrong, reach out through the community channel. We take security reports seriously.

## What's next

- [How custody works →](/docs/your-money/custody)
- [24-hour emergency exit →](/docs/your-money/emergency-exit)
- [How Stacked works →](/docs/about/how-stacked-works)
- [What's next →](/docs/about/whats-next) — the broader roadmap.
