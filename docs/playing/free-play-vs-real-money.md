---
sidebar_position: 21
---

# Free Play vs real-money

Stacked has two modes side by side in the same lobby: Free Play and real-money. The poker is identical — same rules, same shuffler, same interface — only the economics differ.
## At a glance

|  | Free Play | Real-money |
|---|---|---|
| Chips | Play-money, unlimited | Backed by USDC (1 chip = $0.01) |
| Real wins / losses | No | Yes |
| Rake | None | 4% of the pot, capped. [How rake works →](/docs/your-money/rake) |
| Host earnings | None | 25% of rake. [Hosting earnings →](/docs/hosting/earnings) |
| On-chain activity | None | Per-hand settlement on Base |

## How they're the same

Free Play uses the same poker engine that runs real-money tables. Same dealer logic, same shuffler, same betting rounds, same UI. If you've spent time on Free Play and then sit down at a real-money table, nothing about the game itself will surprise you.

The Host model is the same too. Anyone can create either kind of table; both require Host approval before a player sits.

## How they differ

**Money.** Free Play chips are play-money — unlimited, no value, no real wins or losses. Each session starts fresh; there's no balance to track between visits. Real-money chips are backed by USDC (a digital dollar pegged 1:1 to USD) on Base, at a fixed rate of 1 chip = $0.01.

**On-chain activity.** Real-money tables are smart contracts on Base. When you sit, your USDC moves into the contract; when you leave, it moves back to your wallet; in between, every hand settles on-chain. Free Play has no contract and no settlement — chips are tracked off-chain and forgotten when you leave.

**Rake and earnings.** Real-money tables have rake on every pot, and the Host earns 25% of it. Free Play has neither.

## Switching between them

You don't have to choose once. Tables show up together in the lobby with a tag indicating which is which, and you can leave one and join the other in the same session. The only practical step before sitting at a real-money table is having USDC on Base in your wallet — if it's empty, you'll be prompted to deposit before you sit down.

## When to play which

- **Free Play** is for trying the app, learning the flow, or just playing for fun with no risk. A reasonable place to start before your first real-money hand.
- **Real-money** is when you want the chips to mean something.

## What's next

- [Your first Free Play hand →](/docs/getting-started/first-free-play-hand) — walkthrough.
- [Your first real-money hand →](/docs/getting-started/first-real-money-hand) — walkthrough including USDC deposit.
- [Joining a table →](/docs/playing/joining-a-table) — finding a table and getting approved by the Host.
