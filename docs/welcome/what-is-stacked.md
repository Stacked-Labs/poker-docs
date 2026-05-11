---
sidebar_position: 1
---

# What is Stacked?

Create your own poker table, settled on-chain.

![Stacked poker table — green felt with the Stacked wordmark.](/img/tables/table-horizontal-green.webp)

Stacked is a poker platform where every table is created by a player and every real-money hand settles to USDC on Base. Hosts create the tables and decide who sits at them. Stacked runs the game itself — dealing, betting rounds, turn order — while a smart contract on Base holds the money and settles every hand. Two systems, each doing what it's good at.

## How it works

A few ideas tie the whole thing together.

### Anyone can host

Every table on Stacked is created by a player. **On real-money tables you host, you earn 25% of the rake** — paid out on-chain whenever you withdraw. You set the stakes, invite who you want, and approve players as they request a seat. ([How rake works →](/docs/your-money/rake))

### Your money is on-chain, not with us

Each real-money table is its own smart contract on Base. When you sit down, your USDC moves into the table contract; when you leave, it moves back to your wallet. Stacked itself never holds player funds. If a settlement ever stalls, you can withdraw your stack directly from the contract after 24 hours — no support ticket, no permission needed.

### Settlement happens every hand

After every real-money hand, the contract updates balances on-chain. Settlement is typically sub-second, depending on Base network conditions, and **Stacked covers the gas — you never pay to settle a hand**. There's no batch, no end-of-session reconciliation; your stack at the table matches what's on-chain, hand to hand.

### No KYC, no account

Connect any thirdweb-supported wallet — Coinbase Wallet, MetaMask, Rainbow, WalletConnect — or use the embedded wallet Stacked provides if you don't have one. There's no signup, no email, no identity check.

## Free Play

If you want to try Stacked without putting USDC on the table, every Host can also create **Free Play** tables — play-money chips, no real value, no rake. Free Play tables share the same lobby as real-money tables and are clearly tagged so you always know which mode you're in.

## What's next

- [Connect a wallet](/docs/getting-started/connect-a-wallet) — to deposit USDC and join a real-money table.
- [Try a Free Play hand](/docs/getting-started/first-free-play-hand) — no USDC required.
- [How a hand of Stacked works](/docs/welcome/how-a-hand-works) — step-by-step walkthrough.
- [Hosting a table](/docs/hosting/overview) — create a table and earn 25% of the rake on it.
