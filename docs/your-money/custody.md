---
sidebar_position: 50
---

import MoneyPath from '@site/src/components/MoneyPath';

# How custody works

Every real-money buy-in sits in that table's own contract, not in a Stacked Poker account. A smart contract is a small program that can only do what its code allows.

## What holds your money

Every real-money table on Stacked is its own smart contract, deployed to Base (an Ethereum-based network with very low fees) when the Host creates the table. When you buy in, your money moves into that table's contract. When you stand up, your table stack returns to your wallet balance. At a cash table, every settled hand updates your table stack inside the contract.

<MoneyPath />

A few practical consequences:

- **Stacked itself never holds your money.** It sits in the contract, and only the contract's rules can move it.
- **One contract per table.** If you play at three real-money tables, your money is held across three separate contracts. Leaving one doesn't affect any other.
- **Free Play has no contract.** Play chips aren't tracked onchain. Only real-money tables involve a contract.

## What the contract can and can't do

Players and Hosts can't change a table's contract rules. Stacked can update the shared code every table runs on, and every version keeps the same guarantees: the money paths only ever pay players, and the 24-hour exit can't be switched off. See [Code and contracts](#code-and-contracts) below for what an update does and doesn't change.

**The contract can:**

- Accept your buy-in when you sit down.
- Update table stacks onchain after each hand at a cash table.
- Return your table stack to your wallet balance when you stand up.
- Release your stack through the [24-hour exit](/docs/your-money/emergency-exit) if hands stop settling for 24 hours.

**The contract cannot:**

- Send your money anywhere outside its own rules. Your table stack only ever returns to you.
- Change the platform fee schedule on its own.
- Send your stack to anyone but you, once you've left or after the 24-hour exit unlocks.
- Be paused in a way that blocks the 24-hour exit. Ordinary returns to your wallet can be paused; the 24-hour exit cannot. The exit is for players still seated, so if you've already left a table while returns are paused, your stack waits in the contract, in your name, until they resume.

## Who does what

Three parties touch a real-money table. Each has a defined and limited role:

| Party | What they can do | What they can't do |
|---|---|---|
| **You (player)** | Buy in, play, stand up, use the 24-hour exit | Move another player's money; change table rules |
| **Host** | Approve players if they turn off auto-seating, kick, change stakes between hands, pause or end the table, collect their share of the platform fee | Move any player's stack; change the platform fee schedule |
| **Stacked** | Run the live game, deploy and operate tables, update table contract code, pause buy-ins and ordinary returns to your wallet in an emergency, close a table in an emergency (which returns every balance to its owner) | Hold player money; move money outside the contract's rules; switch off the 24-hour exit |

There are two systems at work, each doing what it's good at. Stacked's servers run the game: dealing, betting and turn order. The table's contract holds the money and records each cash-table hand's result.

## Code and contracts

Stacked's table contracts are deployed and source-verified on [Basescan](https://basescan.org), so the actual code each contract runs is readable on the block explorer. We don't currently maintain a public GitHub repo for the contracts. That may change later.

The contracts are intentionally simple: short functions, narrow paths in and out, and no route that sends your money anywhere but back to you. They have extensive unit-test coverage.

Table contracts are deployed from a shared implementation that Stacked can update, and an update applies to tables that already exist. That's how a bug gets fixed for everyone at once rather than stranding money at every open table. We'd rather tell you that than let you find it on the block explorer. What it doesn't change: the money paths still only ever pay you, and the 24-hour exit still can't be switched off. See [Security and contracts](/docs/about/security) for the full picture.

**An external audit is on the roadmap and not yet complete.** Until that audit lands, the trust story rests on three things: testing, narrow money paths, and the 24-hour exit.

If you want to see the code for a specific table, open its contract address on Basescan and read it directly.

## Contract addresses

Each real-money table's own contract address is shown in that table's settings. Open it on Basescan to read the code. The shared factories and beacons behind every table and tournament are listed on [Smart contracts](/docs/reference/smart-contracts).

## What's next

- [The 24-hour exit →](/docs/your-money/emergency-exit): the safety net behind your table's contract.
- [How hands settle →](/docs/your-money/settlement): what happens onchain after every cash-table hand.
- [Buying in →](/docs/your-money/deposits) and [Cash out →](/docs/your-money/withdrawals): the ordinary paths in and out.
