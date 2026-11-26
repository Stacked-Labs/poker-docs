---
sidebar_position: 1
---

import MoneyPath from '@site/src/components/MoneyPath';

# What is Stacked Poker?

Stacked Poker is browser poker that any player can host, with every real-money buy-in held in that table's own contract. Host a game for your group chat, or run your own tournament.

<MoneyPath />

## What it is

Every table on Stacked is created by a player, the Host. The Host sets the stakes and invites who they want. Real-money tables are played in USDC, a digital dollar that holds a stable value.

Two systems work together, each doing what it's good at. Stacked's servers run the game: dealing, betting rounds and turn order. The table's contract holds the money. A contract is a small program on Base, an Ethereum-based network with very low fees, that holds money and moves it by fixed rules.

## How it works

### Anyone can host

**On real-money tables you host, you earn 25% of the platform fee.** It's credited onchain as hands settle, and you can collect it any time. You set the stakes and invite who you want. Players take a seat instantly by default, and you can switch to approving each one yourself. ([How fees work →](/docs/your-money/fees))

### Your money sits in the table's contract, not with us

Each real-money table is its own contract on Base. When you buy in, your USDC moves into that contract. When you leave, your table stack returns to your wallet balance. Stacked itself never holds player funds. If hands stop settling for 24 hours, you can withdraw your own stack straight from the contract: no support ticket, no permission needed.

### Cash-table hands settle onchain one by one

After every real-money cash-table hand, the contract updates balances onchain. Settlement typically takes under 5 seconds, depending on Base network conditions, and **Stacked covers the gas, so you never pay to settle a hand**. (Gas is the small network fee paid to record a transaction on Base.) There's no batch and no end-of-session reconciliation: your table stack matches what's onchain, hand to hand.

Tournament hands don't settle one by one. A tournament pays out through its event contract when it ends. See [Tournaments](/docs/playing/tournaments).

### Sign in with a wallet you have, or one we create

Sign in with a popular wallet (Coinbase Wallet, MetaMask, Rainbow, WalletConnect), or let Stacked create a wallet for you. A wallet is the app that holds your USDC. If you use your own wallet, it asks you to confirm your own buy-ins and the return of your table stack.

## Free Play

To try Stacked without putting USDC on the table, play **Free Play**. Free Play needs no signup. It uses play chips with no real value, charges no platform fee, and pays Hosts nothing. Free Play tables show up in Play beside real-money tables and are clearly tagged, so you always know which mode you're in.

## What's next

- [Sign in](/docs/getting-started/connect-a-wallet): to add funds and join a real-money table.
- [Try a Free Play hand](/docs/getting-started/first-free-play-hand): no USDC needed.
- [How a hand of Stacked works](/docs/welcome/how-a-hand-works): a step-by-step walkthrough.
- [Hosting a table](/docs/hosting/overview): create a table and earn 25% of the platform fee on it.
