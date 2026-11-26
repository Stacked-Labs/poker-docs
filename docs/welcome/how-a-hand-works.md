---
sidebar_position: 2
---

import MoneyPath from '@site/src/components/MoneyPath';

# How a hand of Stacked works

This page follows one real-money cash hand from the Host creating the table to a player leaving it, with names and numbers, so you can see where your money is at each step.

Your money makes one simple round trip. It goes from your wallet balance into the table's contract when you sit, and your table stack returns to your wallet balance when you leave:

<MoneyPath inLabel="Buy in when you sit" outLabel="Stand up, Cash out" />

Two systems work together the whole time: Stacked Poker runs the live game, and the table's contract holds the money.

## The setup

**Alice** decides to host a table. She signs in, opens Host, picks $0.50 / $1 stakes, sets the table to real-money, and makes it public. Stacked gives the table its own contract, a small program that holds the money and follows fixed rules, on Base, an Ethereum-based network with very low fees. Creating the table is free: Alice never pays gas (the small network fee for an onchain action). Stacked covers it.

**Bob** is browsing Play. He spots Alice's table, sees the stakes match what he wants, and picks a seat. He chooses a $100 buy-in. He signed in with his own wallet, so it asks him to confirm. A few seconds later the contract holds his 100 USDC, a digital dollar that holds a stable value. Alice left Auto-Accept on, so Bob is seated right away with 10,000 chips in front of him (1 chip = $0.01).

**Carol** does the same: $100 buy-in, seated with 10,000 chips.

Alice doesn't have to play to earn. As soon as hands start running, she earns 25% of the platform fee on every pot. She decides to play too: she takes a seat at her own table, buys in for $100, and the table is three-handed.

## The hand

Bob is on the button this hand. Carol posts the small blind ($0.50). Alice posts the big blind ($1).

Everyone gets two hole cards. Bob raises to $3. Carol folds. Alice calls.

**Flop:** K♠ 7♦ 2♥. Alice checks. Bob bets $5. Alice calls.

**Turn:** K♥. Alice checks again. Bob bets $12. Alice raises to $30. Bob calls.

**River:** 3♣. Alice goes all-in for the rest of her stack. Bob calls.

**Showdown:** Alice turns over K♣ Q♣, three kings with a queen kicker. Bob turns over K♦ J♦, three kings with a jack kicker. Alice wins the pot.

None of that hand was onchain. The live game runs on Stacked's servers in real time. No wallet prompts, no transactions, no gas, for any of the three players.

## Settlement

The hand ends and settles onchain. Each seat's balance in the table's contract updates:

- Alice's stack goes up by the pot, minus the platform fee.
- Bob's stack goes down by what he lost.
- Carol's stack is down by her posted small blind.
- The platform fee is taken from the pot. As the Host, Alice earns 25% of the fee, credited to her earnings at this table. (See [How fees work](/docs/your-money/fees) for the math.)

Settlement confirms on Base typically in under 5 seconds and runs in the background. By the time the next hand is being dealt, everyone's onchain seat balance matches what they see at the table. Stacked covers the gas for settlement, so nobody at the table pays anything for it.

To check the result yourself, the settlement is visible on Basescan, a public website where anyone can read the table's contract activity.

## Leaving

A few hands later, Bob decides he's done. He stands up between hands and taps Cash out. His table stack moves from the contract back to his wallet balance as USDC. Bob signed in with his own wallet, so he confirms the step himself and pays the Base network fee on it, typically under a cent. A player who signed in with a social account, email or phone pays nothing: Stacked covers it.

Carol keeps playing. Alice keeps hosting, with her earnings at the table growing as hands settle. When she's ready, she collects them from the table's settings, the same way Bob took his stack back.

## What you saw

- **Nothing was onchain while the hand was in progress.** Cards, bets, raises and the showdown all run on Stacked's servers. Your wallet only asks for something at the start (your buy-in) and at the end (your table stack returning), and only if you signed in with your own wallet.
- **The contract holds the money.** After every hand, each player's stack matches their onchain seat balance, and the contract only pays it out to that player.
- **It's fast.** Settlement typically takes under 5 seconds. Gameplay isn't slowed down.
- **Stacked covers the network fees on table creation and settlement.** Buy-ins and the return of your table stack are covered too if you signed in with a social account, email or phone. If you signed in with your own wallet, you pay those, because you confirm them.
- **Alice earned the whole time.** A Host's 25% share of the platform fee is credited per hand, live, whether or not the Host plays.

This walkthrough is a cash table. A tournament doesn't settle hand by hand: it pays out through its event contract when it ends. See [Tournaments](/docs/playing/tournaments).

## What's next

- [How hands settle →](/docs/your-money/settlement): what the contract is doing between hands.
- [How custody works →](/docs/your-money/custody): the bigger picture of the contract that held the money.
- [Hosting a table →](/docs/hosting/overview): if you want to be Alice.
