---
sidebar_position: 21
---

# Free Play vs real-money

Free Play and real-money tables sit side by side in Play. The poker is identical (same rules, same shuffler, same interface), and only the money differs.

## At a glance

|  | Free Play | Real-money |
|---|---|---|
| Signup | Not needed | Sign in |
| Chips | Play chips, unlimited | Backed by USDC (1 chip = $0.01) |
| Real wins / losses | No | Yes |
| Platform fee | None | A small platform fee per pot. [How fees work →](/docs/your-money/fees) |
| Host earnings | None | 25% of the platform fee. [What Hosts earn →](/docs/hosting/earnings) |
| Onchain activity | None | Cash tables: every hand settles on Base. Tournaments: paid out through the event contract when they end |

## How they're the same

Free Play uses the same poker engine that runs real-money tables. Same dealer logic, same shuffler, same betting rounds, same interface. If you've spent time on Free Play and then sit down at a real-money table, nothing about the game itself will surprise you.

The Host model is the same too. Anyone can create either kind of table. Both seat players instantly by default, and on both the Host can turn off Auto-Accept to approve each player by hand.

## How they differ

**Money.** Free Play chips are play chips: unlimited, no value, no real wins or losses. Each session starts fresh, and there's no balance to carry between visits. Real-money chips are backed by USDC (a digital dollar that holds a stable value) on Base (an Ethereum-based network with very low fees), at a fixed rate of 1 chip = $0.01.

**Onchain activity.** Each real-money table is its own contract, a program on Base that holds the money and follows fixed rules, deployed when the Host creates the table. When you buy in, your USDC moves into that contract. When you leave, your table stack returns to your wallet balance. In between, every cash-table hand settles onchain. Free Play has no contract and no settlement: chips aren't recorded onchain and are forgotten when you leave.

**Platform fee and earnings.** Real-money tables have a platform fee on every pot, and the Host earns 25% of it. Free Play has neither.

## Switching between them

You don't have to choose once. Tables show up together in Play with a tag indicating which is which, and you can leave one and join the other in the same session. The only step before sitting at a real-money table is having USDC on Base in your wallet balance. If it's empty, you'll be prompted to add funds before you sit down.

## When to play which

- **Free Play** is for trying the app, learning the flow, or playing for fun with no risk. A reasonable place to start before your first real-money hand.
- **Real-money** is when you want the chips to mean something.

## What's next

- [Your first Free Play hand →](/docs/getting-started/first-free-play-hand): a walkthrough.
- [Your first real-money hand →](/docs/getting-started/first-real-money-hand): a walkthrough, including your buy-in.
- [Joining a table →](/docs/playing/joining-a-table): finding a table and taking a seat.
