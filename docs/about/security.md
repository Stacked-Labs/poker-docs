---
sidebar_position: 91
---

# Security and contracts

This page covers what the contracts do, what we've done to make them safe so far, what's still ahead, and how shuffling works.

## Smart contract security

Each real-money table is its own contract, a small program that holds the money and follows the rules written into it. It's deployed on Base, an Ethereum-based network with very low fees, when the Host creates the table. These table contracts are source-verified and readable on [Basescan](https://basescan.org), the public block explorer for Base, so the actual code each contract runs is open for anyone to inspect. We don't currently maintain a public GitHub repo for the contracts. That may change.

The contracts are intentionally simple. They have:

- Short functions with narrow input paths.
- Narrow money paths. Every route that moves USDC out of a table pays it to the player it belongs to, to the Host's earnings, or to the platform fee when a hand settles. There is no function that sends your balance anywhere else.
- Extensive unit-test coverage.
- The 24-hour exit for seated players, which can't be paused or switched off.

### What Stacked can change, stated plainly

Table contracts are deployed from a shared implementation, and Stacked Poker can update that implementation. An update applies to tables that already exist. We hold that ability on purpose: it's how a bug gets fixed for everyone at once, instead of stranding money at every open table. It is also a real power, and you should price it in. The honest version of our security story is "narrow money paths and a fallback you control", not "nobody can touch it."

Stacked can also close a table in an emergency. The only thing that action can do is return every player's balance to their own wallet. And Stacked can pause new buy-ins and the normal return of table stacks in an emergency. That delays the return, but it can't move money anywhere else, and it can't block the 24-hour exit.

**An external audit is on the roadmap and not yet complete.** Until that's done, the security story rests on simplicity, testing, the 24-hour exit, and what you can check yourself on Basescan.

## Trust model

Stacked runs as two systems, each doing what it's best at. The full breakdown is on [How custody works](/docs/your-money/custody).

In short: Stacked runs the game, and the table's contract holds the money. Your USDC, a digital dollar that holds a stable value, sits in the table's contract, not with Stacked, and only the contract's rules can move it. You confirm your own buy-ins, and the contract can only send your table stack back to you. Every real-money cash-table hand settles onchain when it ends. Settlement is fast (typically under 5 seconds on Base) and runs in the background, and you never pay gas, the small network fee for an onchain action, to settle a hand or to create a table. Tournaments pay out through their own contract when they end. If hands stop settling for 24 hours, you can withdraw your own stack.

## The shuffle

Card shuffling happens on Stacked's servers using cryptographic randomness. This is the same model most online poker sites use. Today there's no way for a player to check that a specific shuffle was honest.

**Checking the shuffle yourself is on the roadmap.** The plan is for each shuffle to be committed onchain before the hand and revealed at showdown, so any player can check the cards weren't manipulated. It isn't built yet. When it ships, we'll document it here and on the [How a hand of Stacked works](/docs/welcome/how-a-hand-works) page.

Until then, you are trusting Stacked to deal fairly. What the contract protects is the money at the table: it is held in the contract, and you have the 24-hour exit.

## Reporting an issue

If you find a bug, a vulnerability, or anything that looks wrong, reach out through the community channel. We take security reports seriously.

## What's next

- [How custody works →](/docs/your-money/custody)
- [The 24-hour exit →](/docs/your-money/emergency-exit)
- [How Stacked works →](/docs/about/how-stacked-works)
- [What's next →](/docs/about/whats-next): the broader roadmap.
