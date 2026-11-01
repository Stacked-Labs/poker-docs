---
sidebar_position: 24
---

# Tournaments

Tournaments let a group of players each buy in for the same amount, play until one player holds all the chips, and split a prize pool — with every buy-in and payout settled on-chain, the same way cash games are.

## What a tournament is

A tournament is a single event with a set buy-in. Everyone who enters pays the same buy-in in USDC (a digital dollar that holds a stable value), receives an equal stack of tournament chips, and plays until they run out or win it all. Unlike cash games, tournament chips have no cash value of their own — they only decide your finishing place. What you actually win is a share of the prize pool, paid in USDC.

Tournaments run on Base (an Ethereum-based network with very low fees), and each tournament is its own smart contract — a program on Base that holds the buy-ins and follows fixed rules no one can override — created when the tournament opens. Your USDC sits in that contract, not with Stacked, until the tournament pays out.

## How a tournament works

- **Register.** While registration is open, you pay the buy-in to enter. The buy-in is all-inclusive: the platform fee is already built into it, so there's nothing extra added on top.
- **Late registration.** Most tournaments keep registration open for a window after play begins, so you can still join a little late.
- **Re-entry.** If you bust during the late-registration window, you can buy back in once for another shot (depends on the tournament configuration). Once the window closes, busting out is final.
- **Play down.** Tables combine as players are knocked out, until everyone left is at one final table and then one player has all the chips.
- **Get paid.** When the tournament ends, the top finishers receive their share of the prize pool, sent straight to their wallets on-chain.

## The prize pool

The prize pool is the sum of every buy-in, minus the platform fee, and the top finishers split it. A $20 buy-in tournament with 40 entries builds its prize pool from those 40 buy-ins (less the fee) and pays it out across the top places.

A Host can also **guarantee** a minimum prize pool — for example, "$500 guaranteed." If the buy-ins don't add up to the guarantee, the Host tops up the difference from their own funds, so the advertised pool is always paid in full.

## Buy-in and the platform fee

The platform fee on a tournament is part of the buy-in, not a separate charge. It's a percentage of the buy-in that steps down as buy-ins get larger — a higher percentage at small buy-ins, lower at large ones — and freerolls (tournaments with no buy-in) carry no fee at all. The exact schedule is on the [How fees work](/docs/your-money/fees) page. As with cash games, the Host of a tournament earns 25% of that fee. See [Hosting earnings](/docs/hosting/earnings).

## Changing your mind, and tournaments that can't run

- **Unregister.** If you change your mind before the tournament starts (up to a few minutes before), you can unregister and get your buy-in back in full.
- **Not enough players.** Every tournament has a minimum number of entries. If it doesn't fill, the tournament is cancelled and everyone is refunded their full buy-in.
- **24-hour emergency refund.** If a tournament ever stalls and isn't paid out, a 24-hour safety net kicks in: after that point anyone can open refunds, and every entrant can reclaim their share of what's in the contract. This is the same fallback that protects cash-game balances — your funds can't be frozen indefinitely. See [the 24-hour emergency exit](/docs/your-money/emergency-exit).

## Private tournaments

A tournament can be public, where anyone can register, or private. A private tournament needs an access code from the Host to enter — useful for a home game, a community event, or an invite-only series.

## Gas

Gas is the small network fee for an on-chain action. Stacked covers the gas to open a tournament and to pay out the prizes, so neither the Host nor the winners pay for those. You pay gas only on the actions you sign yourself — registering (paying your buy-in), buying back in, unregistering, or claiming a prize that wasn't delivered automatically.

## Walkthrough

Alice opens a $20 buy-in tournament with a $500 guaranteed prize pool and a minimum of 20 entries. Registration opens, and 40 players — including Bob — each pay $20 to enter.

- The 40 buy-ins more than cover the $500 guarantee, so the prize pool is built from the buy-ins (less the platform fee that's already inside each $20), and Alice's top-up is refunded — none of her own funds are used.
- Play begins. Bob busts midway through the first hour, but late registration is still open, so he re-enters once for another $20 and keeps playing.
- Hours later, three players remain and the prize pool is split among them. Bob finishes second, and his share lands in his wallet on-chain when the tournament settles.
- As the Host, Alice earns 25% of the platform fee collected across all the buy-ins.

If only 12 players had registered instead of 40 — below Alice's minimum of 20 — the tournament would be cancelled and all 12 would get their $20 back in full.

## What's next

- [How fees work →](/docs/your-money/fees) — the buy-in fee schedule, for cash games and tournaments.
- [Hosting earnings →](/docs/hosting/earnings) — the Host's 25% share.
- [24-hour emergency exit →](/docs/your-money/emergency-exit) — the safety net that also covers tournaments.
