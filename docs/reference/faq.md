---
sidebar_position: 80
---

# FAQ

Quick answers to the questions we hear most. Each one links to the deeper page if you want more.

## Custody and trust

**Does Stacked hold my money?**
No. Real-money funds sit in a smart contract on Base — Stacked itself never custodies player money. See [How custody works](/docs/your-money/custody).

**What if Stacked goes down?**
Your money is still in the contract. If settlements stall for 24 hours, you can withdraw your stack directly from the contract — no Stacked involvement needed. See [24-hour emergency exit](/docs/your-money/emergency-exit).

**Are the contracts audited?**
Not yet by an external firm. The contracts have extensive unit-test coverage and are source-verified on Basescan. An external audit is on the roadmap. See [How custody works](/docs/your-money/custody).

**How fair is the deal?**
Card shuffling happens on Stacked's backend using cryptographic randomness. Provably-fair / on-chain shuffling is on the roadmap.

## Playing

**Do I need a wallet to play Free Play?**
Yes — sign-in is wallet-based. But Free Play doesn't require USDC. The embedded wallet path lets you sign in with email or a social account if you don't have a wallet yet.

**Why does the Host have to approve me?**
Stacked is a player-hosted marketplace; the Host curates the table. The trade-off is one request before you sit. See [Joining a table](/docs/playing/joining-a-table).

**What if I disconnect mid-hand?**
The action timer keeps running. If you don't act before it expires, the system folds you. If you reconnect in time, you can keep playing the hand.

**Can I sit at multiple tables at once?**
Yes — each table is independent. Your stack at table A doesn't affect table B.

## Hosting

**Who can host a table?**
Anyone with a connected wallet. Creating a table is free; Stacked sponsors the deployment gas. See [Hosting a table](/docs/hosting/overview).

**How much can a Host earn?**
Hosts earn 25% of the rake on every real-money hand at their tables — credited live, withdrawable any time, no minimum. See [Hosting earnings](/docs/hosting/earnings).

**Do Hosts earn anything on Free Play tables?**
No. Free Play has no rake and no earnings.

## Money

**What's the rake?**
4% of the pot, capped per hand. The cap scales with the table's big blind, with a discount at short-handed tables. 25% goes to the Host, 75% to Stacked. Full details on [How rake works](/docs/your-money/rake).

**Do I pay gas?**
You pay gas on deposits and withdrawals you sign yourself. Stacked covers gas on settlement (every hand) and on table deployment (when a Host creates a table).

**Where do I get USDC on Base?**
Buy on Coinbase and withdraw to Base, bridge from Ethereum mainnet, or swap on a Base DEX. Built-in onramp is coming. See [Get USDC on Base](/docs/getting-started/get-usdc-on-base).

## Access

**Do I need to do KYC?**
No.

**Is Stacked available in my country?**
We're finalizing the geographic availability list. See [Where Stacked is available](/docs/reference/availability) for current status.

**Tournaments?**
Cash games only today. Tournaments are on the roadmap.

**Mobile?**
Stacked works in any modern browser, including mobile.

## What's next

- [Troubleshooting →](/docs/reference/troubleshooting) — when something goes wrong.
- [How custody works →](/docs/your-money/custody)
- [Hosting a table →](/docs/hosting/overview)
